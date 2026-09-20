import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9ait8b3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y9ait8b3g"/>`,
		"fallback": "keyline-icons:square-arrow-down-left-sharp-fill",
	});
}

export default Component;
