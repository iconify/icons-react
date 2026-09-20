import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxeawbdpb.css';

const viewBox = {"width":25,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxeawbdpb"/>`,
		"fallback": "octicon:logo-gist-16",
	});
}

export default Component;
