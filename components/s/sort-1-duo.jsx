import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwntz9y7i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwntz9y7i"/>`,
		"fallback": "glyphs:sort-1-duo",
	});
}

export default Component;
