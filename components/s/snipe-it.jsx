import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idd-aow3o.css';
import '../../css/w/w45w5fwan.css';

const viewBox = {"width":140.2,"height":144.6,"left":66.9,"top":58.4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idd-aow3o"/><path class="w45w5fwan"/>`,
		"fallback": "thesvg-color:snipe-it",
	});
}

export default Component;
