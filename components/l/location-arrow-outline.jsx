import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnqen6m1e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tnqen6m1e"/>`,
		"fallback": "glyphs:location-arrow-outline",
	});
}

export default Component;
