import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/w/wujwvnahd.css';
import '../../css/x/xuyahubhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="wujwvnahd"/><path class="xuyahubhm"/></g>`,
		"fallback": "lets-icons:sort-down",
	});
}

export default Component;
