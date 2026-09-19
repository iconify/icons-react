import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vju0-mbve.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vju0-mbve"/>`,
		"fallback": "glyphs:tree-1-outline",
	});
}

export default Component;
