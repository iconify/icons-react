import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yimvkjbpw.css';
import '../../css/o/o50ybe-st.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yimvkjbpw"/><path class="o50ybe-st"/></g>`,
		"fallback": "hugeicons:rotate-ccw-key",
	});
}

export default Component;
