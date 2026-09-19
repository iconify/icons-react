import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srat1eb3i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="srat1eb3i"/>`,
		"fallback": "glyphs:lips-duo",
	});
}

export default Component;
