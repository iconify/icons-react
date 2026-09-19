import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd6dph84t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd6dph84t"/>`,
		"fallback": "glyphs-poly:view-expand",
	});
}

export default Component;
