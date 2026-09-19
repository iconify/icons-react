import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtxqo4b9o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dtxqo4b9o"/>`,
		"fallback": "glyphs:signal-100-outline",
	});
}

export default Component;
