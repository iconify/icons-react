import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iulq5fb-s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iulq5fb-s"/>`,
		"fallback": "glyphs:mouse-pointer",
	});
}

export default Component;
