import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qh8mg-b3r.css';
import '../../css/x/x8xz7thac.css';
import '../../css/w/wtq2ayb5u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qh8mg-b3r"/><path class="x8xz7thac"/><circle class="wtq2ayb5u"/></g>`,
		"fallback": "charm:shield-keyhole",
	});
}

export default Component;
