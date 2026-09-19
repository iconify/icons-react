import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5n_-8btg.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5n_-8btg"/>`,
		"fallback": "fa:shopping-bag",
	});
}

export default Component;
