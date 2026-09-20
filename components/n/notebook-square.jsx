import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/ueri8sbnv.css';
import '../../css/t/tmugtfqhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ueri8sbnv"/><path class="tmugtfqhd"/></g>`,
		"fallback": "reicon:notebook-square",
	});
}

export default Component;
