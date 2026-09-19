import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyfmew69s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xyfmew69s"/>`,
		"fallback": "glyphs:smile-beam-bold",
	});
}

export default Component;
