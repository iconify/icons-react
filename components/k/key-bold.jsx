import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh68cdc1l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nh68cdc1l"/>`,
		"fallback": "glyphs:key-bold",
	});
}

export default Component;
