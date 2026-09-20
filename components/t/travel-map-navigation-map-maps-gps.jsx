import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djls1ep8q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djls1ep8q"/>`,
		"fallback": "streamline:travel-map-navigation-map-maps-gps",
	});
}

export default Component;
