import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k83m2lbqg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k83m2lbqg"/>`,
		"fallback": "glyphs-poly:l",
	});
}

export default Component;
