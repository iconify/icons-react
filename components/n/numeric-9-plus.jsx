import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fed2npbfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fed2npbfa"/>`,
		"fallback": "mdi:numeric-9-plus",
	});
}

export default Component;
