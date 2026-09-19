import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id6rdh24x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="id6rdh24x"/>`,
		"fallback": "glyphs:pen-nib-outline",
	});
}

export default Component;
