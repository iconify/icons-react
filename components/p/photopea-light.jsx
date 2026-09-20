import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5y1f8b5l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5y1f8b5l"/>`,
		"fallback": "selfhst:photopea-light",
	});
}

export default Component;
