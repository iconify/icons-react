import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qipksitfu.css';
import '../../css/t/tino3_b6l.css';
import '../../css/v/v1gkmbc8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qipksitfu"/><path class="tino3_b6l"/><path class="v1gkmbc8x"/></g>`,
		"fallback": "hugeicons:validation",
	});
}

export default Component;
