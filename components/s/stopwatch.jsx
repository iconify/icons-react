import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/clmn0wb6y.css';
import '../../css/s/sphox_b_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="clmn0wb6y"/><path class="sphox_b_u"/></g>`,
		"fallback": "streamline-sharp:stopwatch",
	});
}

export default Component;
