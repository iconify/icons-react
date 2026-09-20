import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijyw3xq-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijyw3xq-z"/>`,
		"fallback": "uil:map-marker-slash",
	});
}

export default Component;
