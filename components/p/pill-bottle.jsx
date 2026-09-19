import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sl23977et.css';
import '../../css/d/dbhu4ol5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sl23977et"/><path class="dbhu4ol5y"/></g>`,
		"fallback": "hugeicons:pill-bottle",
	});
}

export default Component;
