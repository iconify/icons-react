import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjhr-bb8r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjhr-bb8r"/>`,
		"fallback": "fa6-solid:shield-dog",
	});
}

export default Component;
