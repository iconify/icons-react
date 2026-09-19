import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh-ta55dk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh-ta55dk"/>`,
		"fallback": "flat-color-icons:like-placeholder",
	});
}

export default Component;
