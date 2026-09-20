import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcm3gdc5s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcm3gdc5s"/>`,
		"fallback": "material-icon-theme:toon",
	});
}

export default Component;
