import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xwbkj8xsu.css';
import '../../css/w/wd07y9bkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xwbkj8xsu"/><path class="wd07y9bkb"/></g>`,
		"fallback": "hugeicons:radio-01",
	});
}

export default Component;
