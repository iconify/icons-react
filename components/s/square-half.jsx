import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4wkd6b2q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z4wkd6b2q"/>`,
		"fallback": "glyphs-poly:square-half",
	});
}

export default Component;
