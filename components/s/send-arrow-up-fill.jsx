import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f60r1bcpg.css';
import '../../css/c/cwe0vtbxg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="f60r1bcpg"/><path class="cwe0vtbxg"/></g>`,
		"fallback": "bi:send-arrow-up-fill",
	});
}

export default Component;
