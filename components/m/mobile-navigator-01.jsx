import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cld7pcy1f.css';
import '../../css/t/tq8y5-b6c.css';
import '../../css/w/wm1nw_8cg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cld7pcy1f"/><path class="tq8y5-b6c"/><path class="wm1nw_8cg"/></g>`,
		"fallback": "hugeicons:mobile-navigator-01",
	});
}

export default Component;
