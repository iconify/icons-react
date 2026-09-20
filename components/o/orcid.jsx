import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svjn8gd9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svjn8gd9s"/>`,
		"fallback": "thesvg-color:orcid",
	});
}

export default Component;
