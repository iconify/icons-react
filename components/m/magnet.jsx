import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy61015mi.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy61015mi"/>`,
		"fallback": "el:magnet",
	});
}

export default Component;
