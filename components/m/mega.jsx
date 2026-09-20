import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8g8h_b3b.css';
import '../../css/p/p8n6moh0c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s8g8h_b3b"/><path class="p8n6moh0c"/>`,
		"fallback": "selfhst:mega",
	});
}

export default Component;
