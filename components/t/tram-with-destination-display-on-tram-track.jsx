import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3fuerh2q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3fuerh2q"/>`,
		"fallback": "pinhead:tram-with-destination-display-on-tram-track",
	});
}

export default Component;
