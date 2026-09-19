import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/on2p_wi5n.css';
import '../../css/v/v3y-9vz7f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="on2p_wi5n"/><path clip-rule="evenodd" class="v3y-9vz7f"/></g>`,
		"fallback": "glyphs:rolling-eyes-bold",
	});
}

export default Component;
