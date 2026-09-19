import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypweetshz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ypweetshz"/>`,
		"fallback": "glyphs:tree-4-outline",
	});
}

export default Component;
