import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt8gsz3uj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tt8gsz3uj"/>`,
		"fallback": "glyphs:pen-bold",
	});
}

export default Component;
