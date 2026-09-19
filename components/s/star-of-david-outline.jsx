import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq9y3hb5i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lq9y3hb5i"/>`,
		"fallback": "glyphs:star-of-david-outline",
	});
}

export default Component;
