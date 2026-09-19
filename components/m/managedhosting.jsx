import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn9do0b7m.css';

const viewBox = {"width":1024,"height":992};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn9do0b7m"/>`,
		"fallback": "whh:managedhosting",
	});
}

export default Component;
