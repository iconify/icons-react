import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2wholb7l.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2wholb7l"/>`,
		"fallback": "devicon-plain:quasar",
	});
}

export default Component;
