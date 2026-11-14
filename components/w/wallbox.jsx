import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oe0dezbyt.css';
import '../../css/a/a1fp7_bvg.css';
import '../../css/z/zb3_-p_9w.css';
import '../../css/w/wca0gqejr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oe0dezbyt"/><rect class="a1fp7_bvg"/><rect class="zb3_-p_9w"/><path class="wca0gqejr"/></g>`,
		"fallback": "evicons:wallbox",
	});
}

export default Component;
