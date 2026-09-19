import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca7z5h1rz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca7z5h1rz"/>`,
		"fallback": "griddy-icons:start-record",
	});
}

export default Component;
