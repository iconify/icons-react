import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr1l_cgam.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr1l_cgam"/>`,
		"fallback": "topcoat:refresh",
	});
}

export default Component;
