import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/l/ltjm4ubuf.css';
import '../../css/w/we1o4actj.css';
import '../../css/p/pp76qbckp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ltjm4ubuf"/><path class="we1o4actj wm-shine"/><path class="pp76qbckp"/></g>`,
		"fallback": "withicons-kawaii:table",
	});
}

export default Component;
