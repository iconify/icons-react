import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2b7qop6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2b7qop6m"/>`,
		"fallback": "thesvg-color:tapas",
	});
}

export default Component;
