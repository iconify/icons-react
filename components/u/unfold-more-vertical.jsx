import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utpl0q-lo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utpl0q-lo"/>`,
		"fallback": "mdi-light:unfold-more-vertical",
	});
}

export default Component;
