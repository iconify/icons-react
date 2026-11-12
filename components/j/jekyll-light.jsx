import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzzql6bxo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzzql6bxo"/>`,
		"fallback": "selfhst:jekyll-light",
	});
}

export default Component;
