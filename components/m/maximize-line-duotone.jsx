import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j-eh52bdl.css';
import '../../css/s/sxv1zyb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j-eh52bdl"/><path class="sxv1zyb9f"/></g>`,
		"fallback": "solar:maximize-line-duotone",
	});
}

export default Component;
