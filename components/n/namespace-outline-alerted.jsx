import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_yhajbgl.css';
import '../../css/s/s_tecendb.css';
import '../../css/y/yiybycb-p.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_yhajbgl"/><path class="s_tecendb"/><path class="yiybycb-p"/>`,
		"fallback": "clarity:namespace-outline-alerted",
	});
}

export default Component;
