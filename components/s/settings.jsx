import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/r/r1kpv1bac.css';
import '../../css/o/ons53cb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="r1kpv1bac"/><circle class="ons53cb4g"/></g>`,
		"fallback": "codex:settings",
	});
}

export default Component;
