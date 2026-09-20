import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1p4-imiy.css';
import '../../css/f/fbmp7wgwj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1p4-imiy"/><path class="fbmp7wgwj"/>`,
		"fallback": "vaadin:user-clock",
	});
}

export default Component;
