import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/iz02l7bxj.css';
import '../../css/p/ptwz7cczz.css';
import '../../css/x/xohym5bkp.css';
import '../../css/c/c5_ce6b7b.css';
import '../../css/d/d7cftvo7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="iz02l7bxj"/><path class="ptwz7cczz"/><path class="xohym5bkp"/><path class="c5_ce6b7b"/><path class="d7cftvo7z"/></g>`,
		"fallback": "hugeicons:rubiks-cube",
	});
}

export default Component;
