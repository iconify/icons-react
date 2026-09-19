import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/w/w91q8kr_q.css';
import '../../css/h/hio0vubtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="w91q8kr_q"/><rect class="hio0vubtf"/></g>`,
		"fallback": "codex:table",
	});
}

export default Component;
