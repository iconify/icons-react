import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prq4-o15b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prq4-o15b"/>`,
		"fallback": "iconamoon:share-2",
	});
}

export default Component;
