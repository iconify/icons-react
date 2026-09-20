import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teeupqbdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teeupqbdr"/>`,
		"fallback": "thesvg-color:virgin-media",
	});
}

export default Component;
