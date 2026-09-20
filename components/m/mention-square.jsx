import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rxjzgrbhm.css';
import '../../css/a/ai20vsrwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rxjzgrbhm"/><path class="ai20vsrwz"/></g>`,
		"fallback": "reicon:mention-square",
	});
}

export default Component;
