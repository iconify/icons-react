import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q5dg09b5o.css';
import '../../css/g/gbwq48bja.css';
import '../../css/v/vpyeb4b2u.css';
import '../../css/e/esh1ivbxe.css';
import '../../css/l/lwnomdbkn.css';
import '../../css/e/exb_1lbic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q5dg09b5o"/><path class="gbwq48bja"/><path class="vpyeb4b2u"/><path class="esh1ivbxe"/><path class="lwnomdbkn"/><path class="exb_1lbic"/></g>`,
		"fallback": "iconaut:translate",
	});
}

export default Component;
