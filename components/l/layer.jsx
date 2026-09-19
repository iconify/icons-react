import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wnp_mvbpj.css';
import '../../css/f/f620otqdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wnp_mvbpj"/><path class="f620otqdp"/></g>`,
		"fallback": "hugeicons:layer",
	});
}

export default Component;
