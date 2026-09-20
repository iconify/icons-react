import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-x6w3ngg.css';

const viewBox = {"width":51.974,"height":20.409,"left":-0.578,"top":-0.578};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-x6w3ngg"/>`,
		"fallback": "thesvg-color:ola-cabs",
	});
}

export default Component;
