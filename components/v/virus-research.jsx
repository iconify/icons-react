import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i66k2mbcm.css';
import '../../css/z/zqkw5tbxt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i66k2mbcm"/><path class="zqkw5tbxt"/></g>`,
		"fallback": "healthicons:virus-research",
	});
}

export default Component;
