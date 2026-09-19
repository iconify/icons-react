import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkhkx8d9i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pkhkx8d9i"/>`,
		"fallback": "glyphs:target-pointer-bold",
	});
}

export default Component;
