import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6kz59bpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6kz59bpa"/>`,
		"fallback": "thesvg-color:quest",
	});
}

export default Component;
