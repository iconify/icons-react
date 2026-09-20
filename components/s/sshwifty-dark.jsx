import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctjzpmbpg.css';
import '../../css/r/ry3qkjbjr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctjzpmbpg"/><path class="ry3qkjbjr"/>`,
		"fallback": "selfhst:sshwifty-dark",
	});
}

export default Component;
