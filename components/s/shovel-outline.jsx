import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnn7sfq2n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nnn7sfq2n"/>`,
		"fallback": "glyphs:shovel-outline",
	});
}

export default Component;
