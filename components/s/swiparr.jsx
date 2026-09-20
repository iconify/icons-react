import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl6gyl07q.css';
import '../../css/h/hxv6wjbvr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl6gyl07q"/><path class="hxv6wjbvr"/>`,
		"fallback": "selfhst:swiparr",
	});
}

export default Component;
