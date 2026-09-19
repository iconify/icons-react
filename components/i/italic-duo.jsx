import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esb1j89to.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esb1j89to"/>`,
		"fallback": "glyphs:italic-duo",
	});
}

export default Component;
