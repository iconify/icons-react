import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzm6tn2ba.css';
import '../../css/f/fyf-67bhl.css';

const viewBox = {"width":14.464,"height":12.504};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pzm6tn2ba"/><path class="fyf-67bhl"/>`,
		"fallback": "thesvg-color:pocket",
	});
}

export default Component;
