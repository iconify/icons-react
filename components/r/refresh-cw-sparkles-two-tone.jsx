import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/srwktyvtj.css';
import '../../css/s/stlmuj5hc.css';
import '../../css/y/yu9s5hbaa.css';
import '../../css/e/e1jtfybva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="srwktyvtj"/><path class="stlmuj5hc"/><path class="yu9s5hbaa"/><path class="e1jtfybva"/></g>`,
		"fallback": "keyline-icons:refresh-cw-sparkles-two-tone",
	});
}

export default Component;
