import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3y6xqgne.css';
import '../../css/p/p84959bnj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3y6xqgne"/><path class="p84959bnj"/>`,
		"fallback": "selfhst:mozilla-monitor-light",
	});
}

export default Component;
