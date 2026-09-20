import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dse1e7dvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dse1e7dvd"/>`,
		"fallback": "keyline-icons:laptop",
	});
}

export default Component;
