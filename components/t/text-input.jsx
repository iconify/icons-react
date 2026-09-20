import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg419tbbu.css';
import '../../css/k/koi2gi6-m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg419tbbu"/><path class="koi2gi6-m"/>`,
		"fallback": "vaadin:text-input",
	});
}

export default Component;
