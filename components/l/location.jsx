import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/v/vzdb8z1tw.css';
import '../../css/h/hv1mrj1-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="vzdb8z1tw"/><circle class="hv1mrj1-p"/></g>`,
		"fallback": "codex:location",
	});
}

export default Component;
