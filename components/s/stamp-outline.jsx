import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru0kn4bpt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ru0kn4bpt"/>`,
		"fallback": "glyphs:stamp-outline",
	});
}

export default Component;
