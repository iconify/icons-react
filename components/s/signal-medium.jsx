import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni0dax4td.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni0dax4td"/>`,
		"fallback": "streamline:signal-medium",
	});
}

export default Component;
