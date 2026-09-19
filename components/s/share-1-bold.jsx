import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru5b1fbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru5b1fbvx"/>`,
		"fallback": "iconamoon:share-1-bold",
	});
}

export default Component;
