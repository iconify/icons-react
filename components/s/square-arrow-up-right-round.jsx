import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u85-a-bde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u85-a-bde"/>`,
		"fallback": "coolicons:square-arrow-up-right-round",
	});
}

export default Component;
