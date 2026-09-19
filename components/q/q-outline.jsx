import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcta_v5_z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dcta_v5_z"/>`,
		"fallback": "glyphs:q-outline",
	});
}

export default Component;
