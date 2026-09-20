import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hhvux2gvb.css';
import '../../css/m/mnaosmbku.css';
import '../../css/z/zrxk0nb5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hhvux2gvb"/><path class="mnaosmbku"/><path class="zrxk0nb5d"/></g>`,
		"fallback": "reicon:money-recive",
	});
}

export default Component;
