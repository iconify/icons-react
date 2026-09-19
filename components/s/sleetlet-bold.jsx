import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om8b7-bor.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om8b7-bor"/>`,
		"fallback": "glyphs:sleetlet-bold",
	});
}

export default Component;
