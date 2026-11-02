import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/c61o_l6dm.css';
import '../../css/t/t0hxc5dvj.css';
import '../../css/m/mx_eqp0lm.css';
import '../../css/n/nb0c9bclg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="c61o_l6dm"/><path class="t0hxc5dvj"/><path class="mx_eqp0lm"/><path class="nb0c9bclg"/></g>`,
		"fallback": "matita:key",
	});
}

export default Component;
