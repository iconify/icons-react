import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/k6_aq-qrg.css';
import '../../css/w/wsne2w3tj.css';
import '../../css/i/iafhy2rfj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="k6_aq-qrg"/><path class="wsne2w3tj"/><path class="iafhy2rfj"/></g>`,
		"fallback": "streamline:music-folder-song",
	});
}

export default Component;
