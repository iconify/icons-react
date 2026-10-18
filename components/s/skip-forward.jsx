import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4qz8-bil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4qz8-bil"/>`,
		"fallback": "vadivam:skip-forward",
	});
}

export default Component;
