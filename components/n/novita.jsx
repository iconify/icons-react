import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca3wkk41t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ca3wkk41t"/>`,
		"fallback": "thesvg-color:novita",
	});
}

export default Component;
