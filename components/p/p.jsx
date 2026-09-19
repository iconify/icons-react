import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n38uvsbak.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n38uvsbak"/>`,
		"fallback": "glyphs-poly:p",
	});
}

export default Component;
