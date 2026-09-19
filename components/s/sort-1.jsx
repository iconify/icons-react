import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcf3m5b1z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcf3m5b1z"/>`,
		"fallback": "glyphs:sort-1",
	});
}

export default Component;
