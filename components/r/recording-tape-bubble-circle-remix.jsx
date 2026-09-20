import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5d43wbfk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p5d43wbfk"/>`,
		"fallback": "streamline-flex:recording-tape-bubble-circle-remix",
	});
}

export default Component;
