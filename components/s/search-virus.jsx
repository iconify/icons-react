import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp-6atb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gp-6atb-h"/>`,
		"fallback": "griddy-icons:search-virus",
	});
}

export default Component;
