import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-vjr-y9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-vjr-y9k"/>`,
		"fallback": "thesvg-color:smugmug",
	});
}

export default Component;
