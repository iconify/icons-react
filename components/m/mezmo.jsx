import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra4ievf3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra4ievf3i"/>`,
		"fallback": "thesvg-color:mezmo",
	});
}

export default Component;
