import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8vvxucjh.css';
import '../../css/x/xvp3f-_7x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8vvxucjh"/><path class="xvp3f-_7x"/>`,
		"fallback": "selfhst:tailscale-light",
	});
}

export default Component;
