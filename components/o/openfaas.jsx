import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi-4w3bku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi-4w3bku"/>`,
		"fallback": "thesvg-color:openfaas",
	});
}

export default Component;
