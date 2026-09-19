import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npyt5pblr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="npyt5pblr"/>`,
		"fallback": "basil:shopping-bag-outline",
	});
}

export default Component;
