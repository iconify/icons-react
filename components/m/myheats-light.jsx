import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz15a5bue.css';
import '../../css/h/hvvzmxb9t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz15a5bue"/><path class="hvvzmxb9t"/>`,
		"fallback": "selfhst:myheats-light",
	});
}

export default Component;
