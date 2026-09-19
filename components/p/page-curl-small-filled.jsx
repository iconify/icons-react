import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0_gk4btq.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0_gk4btq"/>`,
		"fallback": "dinkie-icons:page-curl-small-filled",
	});
}

export default Component;
