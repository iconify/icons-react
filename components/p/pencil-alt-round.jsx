import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzo5umr7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzo5umr7i"/>`,
		"fallback": "coolicons:pencil-alt-round",
	});
}

export default Component;
