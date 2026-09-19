import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iob8qcc4m.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iob8qcc4m"/>`,
		"fallback": "whh:turnip",
	});
}

export default Component;
