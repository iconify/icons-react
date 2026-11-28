import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkjq270wg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkjq270wg"/>`,
		"fallback": "noviair-light:mug-heart",
	});
}

export default Component;
