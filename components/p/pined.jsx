import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/b/bs1-8-ydm.css';
import '../../css/b/bxyseltqm.css';
import '../../css/u/u78lc2bnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="bs1-8-ydm"/><path class="bxyseltqm"/><path class="u78lc2bnx"/></g>`,
		"fallback": "lets-icons:pined",
	});
}

export default Component;
