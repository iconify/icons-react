import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glz3j1b3v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="glz3j1b3v"/>`,
		"fallback": "streamline:volume-down-solid",
	});
}

export default Component;
