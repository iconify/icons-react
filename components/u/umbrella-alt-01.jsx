import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3uf27rlh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3uf27rlh"/>`,
		"fallback": "griddy-icons:umbrella-alt-01",
	});
}

export default Component;
