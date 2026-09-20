import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx5isab4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx5isab4z"/>`,
		"fallback": "thesvg-color:roots",
	});
}

export default Component;
