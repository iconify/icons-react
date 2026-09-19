import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x3ia_ld1j.css';
import '../../css/c/cl7-ajz_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x3ia_ld1j"/><path class="cl7-ajz_r"/></g>`,
		"fallback": "iconoir:temperature-high",
	});
}

export default Component;
