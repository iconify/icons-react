import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql2ho69vy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql2ho69vy"/>`,
		"fallback": "subway:paragraph-6",
	});
}

export default Component;
