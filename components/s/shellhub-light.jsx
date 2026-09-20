import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfo6yx_nt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfo6yx_nt"/>`,
		"fallback": "selfhst:shellhub-light",
	});
}

export default Component;
