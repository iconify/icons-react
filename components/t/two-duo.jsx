import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9ga4kbog.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9ga4kbog"/>`,
		"fallback": "glyphs:two-duo",
	});
}

export default Component;
