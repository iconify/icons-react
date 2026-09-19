import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln1yav-fl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln1yav-fl"/>`,
		"fallback": "file-icons:urweb",
	});
}

export default Component;
