import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ila733bsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ila733bsb"/>`,
		"fallback": "noviair-light:umbrella",
	});
}

export default Component;
