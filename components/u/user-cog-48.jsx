import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wasq8zbwi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wasq8zbwi"/>`,
		"fallback": "energy-icons:user-cog-48",
	});
}

export default Component;
