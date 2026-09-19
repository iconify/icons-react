import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uztmj3dza.css';
import '../../css/f/fzxlvjhhv.css';
import '../../css/z/zcd4by-hp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uztmj3dza"/><path class="fzxlvjhhv"/><path class="zcd4by-hp"/></g>`,
		"fallback": "hugeicons:settings-05",
	});
}

export default Component;
