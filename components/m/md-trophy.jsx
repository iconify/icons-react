import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg5vlqs8a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg5vlqs8a"/>`,
		"fallback": "ion:md-trophy",
	});
}

export default Component;
