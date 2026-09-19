import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/j/jsfnf4ppw.css';
import '../../css/c/c2z__ccea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="jsfnf4ppw"/><path class="c2z__ccea"/></g>`,
		"fallback": "codex:save",
	});
}

export default Component;
