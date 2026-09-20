import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o35tmfo7o.css';
import '../../css/s/sxv1zyb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o35tmfo7o"/><path class="sxv1zyb9f"/></g>`,
		"fallback": "solar:maximize-linear",
	});
}

export default Component;
