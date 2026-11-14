import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z5k96pceq.css';
import '../../css/f/fjjl66bjn.css';
import '../../css/s/so3841bbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z5k96pceq"/><path class="fjjl66bjn"/><path class="so3841bbi"/></g>`,
		"fallback": "hugeicons:super-intelligence-robot",
	});
}

export default Component;
