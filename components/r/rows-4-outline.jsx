import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr6o49biw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fr6o49biw"/>`,
		"fallback": "solar:rows-4-outline",
	});
}

export default Component;
