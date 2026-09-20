import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlz7m2l2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlz7m2l2v"/>`,
		"fallback": "thesvg-color:okcupid",
	});
}

export default Component;
