import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swn1u1bna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swn1u1bna"/>`,
		"fallback": "noviair-light:shrink",
	});
}

export default Component;
