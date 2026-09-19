import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqhyn0b6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqhyn0b6t"/>`,
		"fallback": "fontisto:play",
	});
}

export default Component;
