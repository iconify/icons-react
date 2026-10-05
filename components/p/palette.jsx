import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/nucfi8f3n.css';
import '../../css/o/ov2t1mbqu.css';
import '../../css/j/jwidfoizv.css';
import '../../css/f/f6j7mbc8u.css';
import '../../css/n/nco0lgbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="nucfi8f3n"/><path class="ov2t1mbqu"/><path class="jwidfoizv"/><path class="f6j7mbc8u"/><path class="nco0lgbqj"/></g>`,
		"fallback": "matita:palette",
	});
}

export default Component;
