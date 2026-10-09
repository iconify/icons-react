import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9jey4b7b.css';
import '../../css/y/y5r8golxs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9jey4b7b"/><path class="y5r8golxs"/>`,
		"fallback": "energy-icons:uranium-48-bold",
	});
}

export default Component;
