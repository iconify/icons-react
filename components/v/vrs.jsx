import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7wkc6bmm.css';
import '../../css/u/u0c79lbga.css';
import '../../css/j/jvytkl3_h.css';

const viewBox = {"width":121,"height":121};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="w7wkc6bmm"/><path class="u0c79lbga"/><path class="jvytkl3_h"/>`,
		"fallback": "thesvg-color:vrs",
	});
}

export default Component;
