import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9j9zzbpt.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9j9zzbpt"/>`,
		"fallback": "whh:syncalt",
	});
}

export default Component;
