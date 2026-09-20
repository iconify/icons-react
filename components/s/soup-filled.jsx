import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ysfxjsqqh.css';
import '../../css/n/nqfk3p38l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ysfxjsqqh"/><path class="nqfk3p38l"/></g>`,
		"fallback": "lsicon:soup-filled",
	});
}

export default Component;
