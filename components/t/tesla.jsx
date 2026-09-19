import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj2x4e0dv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj2x4e0dv"/>`,
		"fallback": "fa7-brands:tesla",
	});
}

export default Component;
