import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqn9yz3js.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqn9yz3js"/>`,
		"fallback": "thesvg:voipdotms",
	});
}

export default Component;
