import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys8dllbiu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys8dllbiu"/>`,
		"fallback": "selfhst:tubesync-light",
	});
}

export default Component;
