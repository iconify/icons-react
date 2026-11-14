import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/u/u37cisb7s.css';
import '../../css/z/zm_cflblu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="u37cisb7s"/><path class="zm_cflblu"/></g>`,
		"fallback": "codex:wallet",
	});
}

export default Component;
