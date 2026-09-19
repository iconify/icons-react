import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9uvcsbce.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n9uvcsbce"/>`,
		"fallback": "glyphs:mobile-bold",
	});
}

export default Component;
