import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eiarx5bwb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eiarx5bwb"/>`,
		"fallback": "glyphs:sort-1-outline",
	});
}

export default Component;
