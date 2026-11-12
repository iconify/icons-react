import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdl17k87h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdl17k87h"/>`,
		"fallback": "selfhst:pg-back-web-light",
	});
}

export default Component;
