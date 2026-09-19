import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/id9m96z9c.css';
import '../../css/o/o5na2xb5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="id9m96z9c"/><path class="o5na2xb5v"/></g>`,
		"fallback": "hugeicons:store-01",
	});
}

export default Component;
