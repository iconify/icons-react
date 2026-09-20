import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3bsu7bgl.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3bsu7bgl"/>`,
		"fallback": "thesvg-color:jule",
	});
}

export default Component;
