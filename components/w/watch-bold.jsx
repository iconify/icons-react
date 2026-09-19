import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmicoeiru.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nmicoeiru"/>`,
		"fallback": "glyphs:watch-bold",
	});
}

export default Component;
