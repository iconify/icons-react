import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl7-i1bol.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl7-i1bol"/>`,
		"fallback": "selfhst:storyden",
	});
}

export default Component;
