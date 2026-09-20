import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2nx_3s3x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2nx_3s3x"/>`,
		"fallback": "selfhst:opentofu-dark",
	});
}

export default Component;
