import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/v/vmoz48bls.css';
import '../../css/q/qa2gjibfg.css';
import '../../css/x/xltar9lyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="vmoz48bls"/><ellipse transform="rotate(-90 10 16)" class="qa2gjibfg"/><path class="xltar9lyx"/></g>`,
		"fallback": "codex:users-group",
	});
}

export default Component;
