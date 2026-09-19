import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmks5cc2e.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmks5cc2e"/>`,
		"fallback": "ep:position",
	});
}

export default Component;
