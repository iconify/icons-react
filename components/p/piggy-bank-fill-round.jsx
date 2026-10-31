import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr-b_7b3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr-b_7b3f"/>`,
		"fallback": "coolicons:piggy-bank-fill-round",
	});
}

export default Component;
