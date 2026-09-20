import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffraa9ztw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffraa9ztw"/>`,
		"fallback": "simple-icons:letterboxd",
	});
}

export default Component;
