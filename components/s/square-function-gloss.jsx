import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvlk20bxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvlk20bxa"/>`,
		"fallback": "withicons:square-function-gloss",
	});
}

export default Component;
