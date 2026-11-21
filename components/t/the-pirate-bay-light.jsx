import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp2kn5b6m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp2kn5b6m"/>`,
		"fallback": "selfhst:the-pirate-bay-light",
	});
}

export default Component;
