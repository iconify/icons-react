import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt67l6e-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rt67l6e-s"/>`,
		"fallback": "akar-icons:more-vertical-fill",
	});
}

export default Component;
