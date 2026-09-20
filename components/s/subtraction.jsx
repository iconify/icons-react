import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwl48ebgu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwl48ebgu"/>`,
		"fallback": "subway:subtraction",
	});
}

export default Component;
