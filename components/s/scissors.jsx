import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/l/l48-m7blu.css';
import '../../css/c/cyfn_yf1w.css';
import '../../css/a/aitpywbwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="l48-m7blu"/><circle class="cyfn_yf1w"/><path class="aitpywbwi"/></g>`,
		"fallback": "codex:scissors",
	});
}

export default Component;
