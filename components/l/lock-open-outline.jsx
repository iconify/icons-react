import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pyyqe43jj.css';
import '../../css/y/ysz-sj5au.css';
import '../../css/k/kopzj4bjj.css';
import '../../css/s/s_3nrbdvv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pyyqe43jj"/><path class="ysz-sj5au"/><path class="kopzj4bjj"/><path class="s_3nrbdvv"/></g>`,
		"fallback": "glyphs:lock-open-outline",
	});
}

export default Component;
