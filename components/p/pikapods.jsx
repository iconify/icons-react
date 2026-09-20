import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tufwuf_6x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tufwuf_6x"/>`,
		"fallback": "selfhst:pikapods",
	});
}

export default Component;
