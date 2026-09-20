import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdw9d8u0z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdw9d8u0z"/>`,
		"fallback": "pinhead:jp-ferry",
	});
}

export default Component;
