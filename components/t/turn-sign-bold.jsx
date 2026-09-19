import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs3jv3vjm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qs3jv3vjm"/>`,
		"fallback": "glyphs:turn-sign-bold",
	});
}

export default Component;
