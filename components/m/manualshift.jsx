import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3hrx-blp.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3hrx-blp"/>`,
		"fallback": "whh:manualshift",
	});
}

export default Component;
