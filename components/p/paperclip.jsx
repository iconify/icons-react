import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k16ubbb0t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k16ubbb0t"/>`,
		"fallback": "glyphs-poly:paperclip",
	});
}

export default Component;
