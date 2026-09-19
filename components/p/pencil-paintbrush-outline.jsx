import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjmsf2bdb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hjmsf2bdb"/>`,
		"fallback": "glyphs:pencil-paintbrush-outline",
	});
}

export default Component;
