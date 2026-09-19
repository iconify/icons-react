import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4rc10b4w.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4rc10b4w"/>`,
		"fallback": "whh:rain",
	});
}

export default Component;
