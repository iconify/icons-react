import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3yyn7pgr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3yyn7pgr"/>`,
		"fallback": "glyphs:seek-skip-bold",
	});
}

export default Component;
