import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uct1ooplc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uct1ooplc"/>`,
		"fallback": "ion:resize",
	});
}

export default Component;
