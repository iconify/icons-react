import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxgrj4bzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxgrj4bzy"/>`,
		"fallback": "iconoir:shopping-bag-plus",
	});
}

export default Component;
