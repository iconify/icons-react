import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p7pd29nnr.css';
import '../../css/v/vz92yjb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p7pd29nnr"/><path class="vz92yjb_d"/></g>`,
		"fallback": "mynaui:mountain-snow",
	});
}

export default Component;
