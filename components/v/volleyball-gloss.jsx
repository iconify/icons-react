import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twj1lm13k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twj1lm13k"/>`,
		"fallback": "withicons:volleyball-gloss",
	});
}

export default Component;
