import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xngcx7bvr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xngcx7bvr"/>`,
		"fallback": "glyphs:user-comment-outline",
	});
}

export default Component;
