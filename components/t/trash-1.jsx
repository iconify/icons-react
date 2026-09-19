import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq5xnlbmo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq5xnlbmo"/>`,
		"fallback": "glyphs:trash-1",
	});
}

export default Component;
