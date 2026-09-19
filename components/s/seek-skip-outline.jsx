import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix-etju_c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ix-etju_c"/>`,
		"fallback": "glyphs:seek-skip-outline",
	});
}

export default Component;
