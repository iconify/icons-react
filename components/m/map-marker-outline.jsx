import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6ya0ub4m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l6ya0ub4m"/>`,
		"fallback": "glyphs:map-marker-outline",
	});
}

export default Component;
