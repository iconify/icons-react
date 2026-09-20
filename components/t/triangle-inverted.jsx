import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvll163ih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvll163ih"/>`,
		"fallback": "tabler:triangle-inverted",
	});
}

export default Component;
