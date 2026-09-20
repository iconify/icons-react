import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuy18qpjk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuy18qpjk"/>`,
		"fallback": "roentgen:power-tower-barrel-1-level",
	});
}

export default Component;
