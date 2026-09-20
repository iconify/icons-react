import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puibmpj5f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puibmpj5f"/>`,
		"fallback": "subway:play",
	});
}

export default Component;
