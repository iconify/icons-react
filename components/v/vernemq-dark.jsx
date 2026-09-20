import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0d80ubpb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0d80ubpb"/>`,
		"fallback": "selfhst:vernemq-dark",
	});
}

export default Component;
