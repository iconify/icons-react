import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/ry_xqo3jr.css';
import '../../css/g/gkxg7d66y.css';
import '../../css/j/je8atubjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ry_xqo3jr wm-shadow"/><path class="gkxg7d66y wm-shadow"/><path class="je8atubjz"/></g>`,
		"fallback": "withicons-brutal:shuffle",
	});
}

export default Component;
