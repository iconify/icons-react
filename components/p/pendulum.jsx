import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/knqqi0bdn.css';
import '../../css/z/z1ws09bbb.css';
import '../../css/w/w1hn1--la.css';
import '../../css/p/ppv_0hbpg.css';
import '../../css/t/tp2vcl6dg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="knqqi0bdn"/><circle class="z1ws09bbb"/><circle class="w1hn1--la"/><circle class="ppv_0hbpg"/><path class="tp2vcl6dg"/></g>`,
		"fallback": "hugeicons:pendulum",
	});
}

export default Component;
