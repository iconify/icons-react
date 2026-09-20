import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3ey7ab7l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q3ey7ab7l"/>`,
		"fallback": "streamline:user-profile-focus-solid",
	});
}

export default Component;
