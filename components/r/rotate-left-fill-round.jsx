import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol5qor7ho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol5qor7ho"/>`,
		"fallback": "coolicons:rotate-left-fill-round",
	});
}

export default Component;
