import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3um52bcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3um52bcf"/>`,
		"fallback": "noviair-light:washing-machine-x",
	});
}

export default Component;
