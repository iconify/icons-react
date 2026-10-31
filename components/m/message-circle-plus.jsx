import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v5fz6ctfc.css';
import '../../css/q/qsatebfkx.css';
import '../../css/k/kko1cibeg.css';
import '../../css/a/a_h4nnhcd.css';
import '../../css/r/r-dm-4akk.css';
import '../../css/g/gt4v7sv4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="v5fz6ctfc wm-shadow"/><path class="qsatebfkx"/><path class="kko1cibeg"/><path class="a_h4nnhcd"/><path class="r-dm-4akk"/><path class="gt4v7sv4m"/></g>`,
		"fallback": "withicons-retro:message-circle-plus",
	});
}

export default Component;
