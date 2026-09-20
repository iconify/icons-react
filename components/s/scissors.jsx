import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/welchcbsj.css';
import '../../css/m/m8tmz5tfa.css';
import '../../css/u/ul_wuibqj.css';
import '../../css/b/bxuuanbpe.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/l/lvvsw5byp.css';
import '../../css/m/mq6ru761b.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="welchcbsj"/><path class="m8tmz5tfa"/><path class="ul_wuibqj"/><path class="bxuuanbpe"/><g class="ij2x_72vy"><path class="lvvsw5byp"/><path class="mq6ru761b"/></g>`,
		"fallback": "openmoji:scissors",
	});
}

export default Component;
