import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/e/e-ud32bnc.css';
import '../../css/f/fxlk_dbbi.css';
import '../../css/f/fg1o3-nyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="e-ud32bnc"/><circle class="fxlk_dbbi"/><path class="fg1o3-nyn"/></g>`,
		"fallback": "codex:music",
	});
}

export default Component;
