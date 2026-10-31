import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg6h2wgtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kg6h2wgtb"/>`,
		"fallback": "withicons:minus-circle-gloss",
	});
}

export default Component;
