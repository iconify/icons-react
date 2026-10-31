import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn8pkrgel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn8pkrgel"/>`,
		"fallback": "coolicons:square-arrow-up-right-fill-round",
	});
}

export default Component;
