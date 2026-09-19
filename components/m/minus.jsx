import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oasy1vb8n.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oasy1vb8n"/>`,
		"fallback": "ep:minus",
	});
}

export default Component;
