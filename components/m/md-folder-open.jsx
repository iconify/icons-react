import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il83t9b_y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il83t9b_y"/>`,
		"fallback": "ion:md-folder-open",
	});
}

export default Component;
