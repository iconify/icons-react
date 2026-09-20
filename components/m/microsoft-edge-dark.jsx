import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd6_-_fea.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd6_-_fea"/>`,
		"fallback": "selfhst:microsoft-edge-dark",
	});
}

export default Component;
