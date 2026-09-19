import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4hrufbly.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4hrufbly"/>`,
		"fallback": "glyphs:nine-duo",
	});
}

export default Component;
