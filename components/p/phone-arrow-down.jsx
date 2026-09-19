import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/djjv7_b8y.css';
import '../../css/c/cki04gb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="djjv7_b8y"/><path class="cki04gb9f"/></g>`,
		"fallback": "hugeicons:phone-arrow-down",
	});
}

export default Component;
