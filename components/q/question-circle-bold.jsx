import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df1uvuf1m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="df1uvuf1m"/>`,
		"fallback": "glyphs:question-circle-bold",
	});
}

export default Component;
