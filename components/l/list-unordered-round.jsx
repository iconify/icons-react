import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfdd8xbro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfdd8xbro"/>`,
		"fallback": "coolicons:list-unordered-round",
	});
}

export default Component;
