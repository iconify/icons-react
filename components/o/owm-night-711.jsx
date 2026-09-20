import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d00ah8b2d.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d00ah8b2d"/>`,
		"fallback": "wi:owm-night-711",
	});
}

export default Component;
