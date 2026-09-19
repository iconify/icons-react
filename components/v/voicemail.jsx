import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/txo_yebkp.css';
import '../../css/x/xamvsrmkn.css';
import '../../css/e/egy9gizwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="txo_yebkp"/><circle class="xamvsrmkn"/><path class="egy9gizwj"/></g>`,
		"fallback": "feather:voicemail",
	});
}

export default Component;
