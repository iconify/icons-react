import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywsqo5b5s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywsqo5b5s"/>`,
		"fallback": "selfhst:newsku-dark",
	});
}

export default Component;
