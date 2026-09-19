import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbhhc8blo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbhhc8blo"/>`,
		"fallback": "glyphs:shield-1",
	});
}

export default Component;
