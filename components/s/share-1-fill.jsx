import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi4i2zbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yi4i2zbjy"/>`,
		"fallback": "iconamoon:share-1-fill",
	});
}

export default Component;
