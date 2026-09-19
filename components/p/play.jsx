import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/i/i5t82_-wp.css';
import '../../css/h/hio0vubtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="i5t82_-wp"/><rect class="hio0vubtf"/></g>`,
		"fallback": "codex:play",
	});
}

export default Component;
