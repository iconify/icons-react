import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kye-rza4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kye-rza4t"/>`,
		"fallback": "thesvg-color:ssrn",
	});
}

export default Component;
