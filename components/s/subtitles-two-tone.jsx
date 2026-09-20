import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/atvej9eay.css';
import '../../css/w/wmdz_xjsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="atvej9eay"/><path class="wmdz_xjsf"/></g>`,
		"fallback": "keyline-icons:subtitles-two-tone",
	});
}

export default Component;
