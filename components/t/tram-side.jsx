import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5udqqn5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5udqqn5y"/>`,
		"fallback": "mdi:tram-side",
	});
}

export default Component;
