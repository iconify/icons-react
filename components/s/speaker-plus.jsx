import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjxj6dbaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjxj6dbaz"/>`,
		"fallback": "noviair:speaker-plus",
	});
}

export default Component;
