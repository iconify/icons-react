import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvvm81brv.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvvm81brv"/>`,
		"fallback": "whh:switch",
	});
}

export default Component;
