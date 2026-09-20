import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij6y9bwyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ij6y9bwyt"/>`,
		"fallback": "thesvg-color:search1api",
	});
}

export default Component;
