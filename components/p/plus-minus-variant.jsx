import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jeu1gcc0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jeu1gcc0p"/>`,
		"fallback": "mdi:plus-minus-variant",
	});
}

export default Component;
