import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ezfdsvasf.css';
import '../../css/j/j2_27xfof.css';
import '../../css/m/mdlt0ybhe.css';
import '../../css/t/tkhoozdbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ezfdsvasf"/><path class="j2_27xfof"/><path class="mdlt0ybhe"/><path class="tkhoozdbg"/></g>`,
		"fallback": "thesvg:metagpt",
	});
}

export default Component;
