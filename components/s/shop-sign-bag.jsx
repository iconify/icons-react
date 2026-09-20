import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rcrjzdrqy.css';
import '../../css/h/h6xo0_btj.css';
import '../../css/a/ayfls2beb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rcrjzdrqy"/><path class="h6xo0_btj"/><path class="ayfls2beb"/></g>`,
		"fallback": "streamline-ultimate:shop-sign-bag",
	});
}

export default Component;
