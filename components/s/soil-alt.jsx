import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jacl9bcni.css';
import '../../css/k/kq61m-efc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jacl9bcni"/><path class="kq61m-efc"/></g>`,
		"fallback": "iconoir:soil-alt",
	});
}

export default Component;
