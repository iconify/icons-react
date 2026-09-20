import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5r6o_bjx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5r6o_bjx"/>`,
		"fallback": "selfhst:live-blog",
	});
}

export default Component;
