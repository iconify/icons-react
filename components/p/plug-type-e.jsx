import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m4l-9ybuj.css';
import '../../css/t/tjwg41mjf.css';
import '../../css/k/kx85uxbfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="m4l-9ybuj"/><path class="tjwg41mjf"/><circle class="kx85uxbfn"/></g>`,
		"fallback": "evicons:plug-type-e",
	});
}

export default Component;
