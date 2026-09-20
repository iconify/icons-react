import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8pyggqfs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8pyggqfs"/>`,
		"fallback": "pinhead:person-wearing-racing-helmet-driving-go-kart",
	});
}

export default Component;
