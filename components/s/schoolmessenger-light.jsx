import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywnwpqb8p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywnwpqb8p"/>`,
		"fallback": "selfhst:schoolmessenger-light",
	});
}

export default Component;
