import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl5gjeb5c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl5gjeb5c"/>`,
		"fallback": "glyphs:location-arrow",
	});
}

export default Component;
