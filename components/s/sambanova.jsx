import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nvp3kb18x.css';
import '../../css/l/l_83d_b0w.css';
import '../../css/x/xjacqllyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nvp3kb18x"/><path class="l_83d_b0w"/><path class="xjacqllyg"/></g>`,
		"fallback": "thesvg:sambanova",
	});
}

export default Component;
