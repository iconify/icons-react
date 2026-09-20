import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oelcicc3r.css';

const viewBox = {"width":150.5,"height":25.6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oelcicc3r"/>`,
		"fallback": "thesvg-color:kraken-light",
	});
}

export default Component;
