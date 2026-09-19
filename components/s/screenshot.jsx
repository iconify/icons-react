import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b0yqckn-b.css';
import '../../css/l/l9q8v2b_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b0yqckn-b"/><path class="l9q8v2b_v"/></g>`,
		"fallback": "iconoir:screenshot",
	});
}

export default Component;
