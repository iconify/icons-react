import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qyv9vzb_f.css';
import '../../css/m/mag11obkh.css';
import '../../css/d/dkae5r7cx.css';
import '../../css/r/rtti3aceo.css';
import '../../css/m/my68hcchx.css';
import '../../css/d/dn21tvbel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qyv9vzb_f wm-shadow"/><path class="mag11obkh"/><path class="dkae5r7cx"/><path class="rtti3aceo"/><path class="my68hcchx"/><path class="dn21tvbel"/></g>`,
		"fallback": "withicons-retro:package",
	});
}

export default Component;
