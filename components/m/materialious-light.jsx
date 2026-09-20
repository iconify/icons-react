import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf9hnbc2i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf9hnbc2i"/>`,
		"fallback": "selfhst:materialious-light",
	});
}

export default Component;
