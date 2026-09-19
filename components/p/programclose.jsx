import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4se2mm0l.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4se2mm0l"/>`,
		"fallback": "whh:programclose",
	});
}

export default Component;
