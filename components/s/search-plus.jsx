import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9les70ub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m9les70ub"/>`,
		"fallback": "griddy-icons:search-plus",
	});
}

export default Component;
