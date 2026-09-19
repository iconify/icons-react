import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ytkds-bxy.css';
import '../../css/l/lc3kdubbj.css';
import '../../css/t/tgva9kbpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="plus-circle-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="ytkds-bxy"/><path class="lc3kdubbj"/><path class="tgva9kbpr"/></g></g>`,
		"fallback": "cuida:plus-circle-outline",
	});
}

export default Component;
