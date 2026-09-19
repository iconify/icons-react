import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc9qv4tax.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rc9qv4tax"/>`,
		"fallback": "glyphs:triangle-outline",
	});
}

export default Component;
