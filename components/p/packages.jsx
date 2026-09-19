import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4w3txb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4w3txb9y"/>`,
		"fallback": "eos-icons:packages",
	});
}

export default Component;
