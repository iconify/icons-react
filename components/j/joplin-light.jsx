import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwqzg0boz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwqzg0boz"/>`,
		"fallback": "selfhst:joplin-light",
	});
}

export default Component;
