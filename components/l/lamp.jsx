import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wm_sm3bjv.css';
import '../../css/n/nzvqko3ep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wm_sm3bjv"/><path class="nzvqko3ep"/></g>`,
		"fallback": "hugeicons:lamp",
	});
}

export default Component;
