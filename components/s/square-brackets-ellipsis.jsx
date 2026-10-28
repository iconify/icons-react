import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mbtf-g2sk.css';
import '../../css/q/ql8d6lb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mbtf-g2sk"/><path class="ql8d6lb8q"/></g>`,
		"fallback": "andrsrxn:square-brackets-ellipsis",
	});
}

export default Component;
