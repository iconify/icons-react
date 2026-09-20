import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2ncwiubz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b2ncwiubz"/>`,
		"fallback": "si:more-vert-square-fill",
	});
}

export default Component;
