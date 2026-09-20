import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3luk2kpd.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3luk2kpd"/>`,
		"fallback": "wi:night-showers",
	});
}

export default Component;
