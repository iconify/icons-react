import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/z/zuyq0qy7l.css';

const viewBox = {"width":1510,"height":1515};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGQXwgc7RF" x2="1" gradientTransform="rotate(-12 4465 426)scale(1466.69 1469.872)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="vc--wpv5i"/></linearGradient></defs><path fill="url(#SVGQXwgc7RF)" class="zuyq0qy7l"/>`,
		"fallback": "thesvg-color:pnj-light",
	});
}

export default Component;
