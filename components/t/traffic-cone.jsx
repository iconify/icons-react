import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp1c9py_h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp1c9py_h"/>`,
		"fallback": "streamline:traffic-cone",
	});
}

export default Component;
