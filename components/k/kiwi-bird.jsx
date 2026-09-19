import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn4unmb2r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn4unmb2r"/>`,
		"fallback": "fa7-solid:kiwi-bird",
	});
}

export default Component;
