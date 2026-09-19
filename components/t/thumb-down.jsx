import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k8cgi3g_w.css';
import '../../css/y/ywllszb7o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k8cgi3g_w"/><path class="ywllszb7o"/></g>`,
		"fallback": "charm:thumb-down",
	});
}

export default Component;
