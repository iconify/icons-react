import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zggaroand.css';
import '../../css/y/ys6p_-b4l.css';
import '../../css/i/ihst44bfj.css';
import '../../css/z/zeje06bkn.css';
import '../../css/e/er8t2-uhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zggaroand"/><path class="ys6p_-b4l"/><path class="ihst44bfj"/><circle class="zeje06bkn"/><path class="er8t2-uhw"/></g>`,
		"fallback": "hugeicons:scooter-02",
	});
}

export default Component;
