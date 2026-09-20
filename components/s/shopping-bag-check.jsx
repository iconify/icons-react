import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x2yuxabkk.css';
import '../../css/k/kfcgn2bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x2yuxabkk"/><path class="kfcgn2bfm"/></g>`,
		"fallback": "streamline-ultimate:shopping-bag-check",
	});
}

export default Component;
