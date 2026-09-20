import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bthykg66v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bthykg66v"/>`,
		"fallback": "typcn:media-stop",
	});
}

export default Component;
