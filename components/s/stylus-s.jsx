import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0oe59bah.css';

const viewBox = {"width":376,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0oe59bah"/>`,
		"fallback": "file-icons:stylus-s",
	});
}

export default Component;
