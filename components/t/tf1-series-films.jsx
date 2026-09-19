import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la0kt7buj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la0kt7buj"/>`,
		"fallback": "cbi:tf1-series-films",
	});
}

export default Component;
