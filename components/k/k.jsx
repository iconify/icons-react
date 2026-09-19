import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdypro58p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdypro58p"/>`,
		"fallback": "glyphs:k",
	});
}

export default Component;
