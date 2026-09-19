import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8uot5bhy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a8uot5bhy"/>`,
		"fallback": "glyphs:squircle-bold",
	});
}

export default Component;
