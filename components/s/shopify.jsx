import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va-jgqbfl.css';
import '../../css/d/dgfwwobqt.css';
import '../../css/y/yaehttbgi.css';

const viewBox = {"width":256,"height":292};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va-jgqbfl"/><path class="dgfwwobqt"/><path class="yaehttbgi"/>`,
		"fallback": "thesvg-color:shopify",
	});
}

export default Component;
