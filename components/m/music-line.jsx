import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dos_yhbgg.css';
import '../../css/a/aaakgqotp.css';
import '../../css/s/sok4_rboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="dos_yhbgg"/><circle class="aaakgqotp"/><path class="sok4_rboc"/></g>`,
		"fallback": "majesticons:music-line",
	});
}

export default Component;
