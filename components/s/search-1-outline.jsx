import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or3_f5cmm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="or3_f5cmm"/>`,
		"fallback": "glyphs:search-1-outline",
	});
}

export default Component;
