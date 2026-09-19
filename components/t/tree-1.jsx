import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm0wchruk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm0wchruk"/>`,
		"fallback": "glyphs:tree-1",
	});
}

export default Component;
