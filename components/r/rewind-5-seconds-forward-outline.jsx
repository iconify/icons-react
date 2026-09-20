import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyxqbob-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kyxqbob-z"/>`,
		"fallback": "solar:rewind-5-seconds-forward-outline",
	});
}

export default Component;
