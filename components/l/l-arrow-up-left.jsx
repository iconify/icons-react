import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/owh02smgg.css';
import '../../css/c/csk6j7b_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="owh02smgg"/><path class="csk6j7b_t"/></g>`,
		"fallback": "mage:l-arrow-up-left",
	});
}

export default Component;
