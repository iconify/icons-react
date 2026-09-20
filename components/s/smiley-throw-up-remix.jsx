import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fihtkvz7e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fihtkvz7e"/>`,
		"fallback": "streamline:smiley-throw-up-remix",
	});
}

export default Component;
