import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr5e5_blr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr5e5_blr"/>`,
		"fallback": "la:itunes-note",
	});
}

export default Component;
