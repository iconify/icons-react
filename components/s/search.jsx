import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/r/rr-qpvb5s.css';
import '../../css/x/xeenv-azh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="rr-qpvb5s"/><path class="xeenv-azh"/></g>`,
		"fallback": "codex:search",
	});
}

export default Component;
