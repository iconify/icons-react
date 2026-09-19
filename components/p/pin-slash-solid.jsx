import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vwt1mrbko.css';
import '../../css/y/y_s5obmcj.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vwt1mrbko"/><path class="y_s5obmcj"/><path class="qr4ochb5c"/></g>`,
		"fallback": "iconoir:pin-slash-solid",
	});
}

export default Component;
