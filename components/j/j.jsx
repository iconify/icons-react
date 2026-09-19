import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx31dgbqm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx31dgbqm"/>`,
		"fallback": "glyphs-poly:j",
	});
}

export default Component;
