import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vowc67b4w.css';
import '../../css/y/yvmidnbxf.css';
import '../../css/t/ted1_ibvk.css';
import '../../css/e/e-1o21bsj.css';
import '../../css/s/s262tv_sm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vowc67b4w"/><path class="yvmidnbxf"/><path class="ted1_ibvk"/><path class="e-1o21bsj"/><path class="s262tv_sm"/></g>`,
		"fallback": "streamline-ultimate-color:road-sign-hairpin-turn-left",
	});
}

export default Component;
