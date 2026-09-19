import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc7yqi9bu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dc7yqi9bu"/>`,
		"fallback": "glyphs-poly:minus",
	});
}

export default Component;
