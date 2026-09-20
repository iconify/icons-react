import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e7olr2b8h.css';
import '../../css/l/lp_j939vo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e7olr2b8h"/><path class="lp_j939vo"/></g>`,
		"fallback": "mage:video-check",
	});
}

export default Component;
