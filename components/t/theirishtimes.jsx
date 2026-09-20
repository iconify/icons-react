import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grkmx94ls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grkmx94ls"/>`,
		"fallback": "simple-icons:theirishtimes",
	});
}

export default Component;
