import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vat9n5byg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vat9n5byg"/>`,
		"fallback": "noviair-light:org-chart",
	});
}

export default Component;
