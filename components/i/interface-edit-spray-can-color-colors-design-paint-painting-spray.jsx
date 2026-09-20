import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rq_hzcivj.css';
import '../../css/z/zltsj2_ya.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="rq_hzcivj"/><path class="zltsj2_ya"/></g>`,
		"fallback": "streamline:interface-edit-spray-can-color-colors-design-paint-painting-spray",
	});
}

export default Component;
