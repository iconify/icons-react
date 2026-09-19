import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk0f0oa3s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qk0f0oa3s"/>`,
		"fallback": "glyphs:tree-4-bold",
	});
}

export default Component;
