import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g0lpy4bji.css';
import '../../css/b/bwpik6bwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g0lpy4bji"/><path class="bwpik6bwp"/></g>`,
		"fallback": "reicon:link8",
	});
}

export default Component;
