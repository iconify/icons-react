import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd-50n3ja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd-50n3ja"/>`,
		"fallback": "ri:vimeo-fill",
	});
}

export default Component;
