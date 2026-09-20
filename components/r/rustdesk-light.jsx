import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhg4t7bvq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhg4t7bvq"/>`,
		"fallback": "selfhst:rustdesk-light",
	});
}

export default Component;
