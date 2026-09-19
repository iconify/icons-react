import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m20auyf3s.css';

const viewBox = {"width":432,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m20auyf3s"/>`,
		"fallback": "ps:rss-icon",
	});
}

export default Component;
