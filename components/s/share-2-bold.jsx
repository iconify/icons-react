import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmdw2ybqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmdw2ybqa"/>`,
		"fallback": "iconamoon:share-2-bold",
	});
}

export default Component;
