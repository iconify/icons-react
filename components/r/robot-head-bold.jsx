import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivu72hdvp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ivu72hdvp"/>`,
		"fallback": "glyphs:robot-head-bold",
	});
}

export default Component;
