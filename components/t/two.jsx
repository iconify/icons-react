import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t70hsicnd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t70hsicnd"/>`,
		"fallback": "glyphs-poly:two",
	});
}

export default Component;
