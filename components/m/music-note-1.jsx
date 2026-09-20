import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/evowz_6qp.css';
import '../../css/w/wwhicdbai.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="evowz_6qp"/><path class="wwhicdbai"/></g>`,
		"fallback": "streamline:music-note-1",
	});
}

export default Component;
