import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff26_emer.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff26_emer"/>`,
		"fallback": "thesvg-color:spacy",
	});
}

export default Component;
