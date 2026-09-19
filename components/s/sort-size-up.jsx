import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aaw_gqb0s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aaw_gqb0s"/>`,
		"fallback": "glyphs:sort-size-up",
	});
}

export default Component;
