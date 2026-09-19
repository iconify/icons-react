import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dou8j9b6s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dou8j9b6s"/>`,
		"fallback": "bytesize:pause",
	});
}

export default Component;
