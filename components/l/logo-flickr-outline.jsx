import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx39xbeov.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx39xbeov"/>`,
		"fallback": "ion:logo-flickr-outline",
	});
}

export default Component;
