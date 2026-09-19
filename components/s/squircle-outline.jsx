import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyn9yi1sk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yyn9yi1sk"/>`,
		"fallback": "glyphs:squircle-outline",
	});
}

export default Component;
