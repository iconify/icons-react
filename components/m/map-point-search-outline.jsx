import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr_qtkblu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fr_qtkblu"/>`,
		"fallback": "solar:map-point-search-outline",
	});
}

export default Component;
