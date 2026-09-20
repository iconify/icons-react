import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/f/fznb90gae.css';
import '../../css/c/cvuf88sia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="fznb90gae"/><path class="cvuf88sia"/></g>`,
		"fallback": "lets-icons:refresh",
	});
}

export default Component;
