import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/ug8b27b4f.css';
import '../../css/f/fcy-udb6j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ug8b27b4f"/><path class="fcy-udb6j"/></g>`,
		"fallback": "streamline-flex:news-paper",
	});
}

export default Component;
