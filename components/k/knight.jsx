import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2e5gzblx.css';

const viewBox = {"width":769,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2e5gzblx"/>`,
		"fallback": "whh:knight",
	});
}

export default Component;
