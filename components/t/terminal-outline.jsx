import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/ljpxgdjml.css';
import '../../css/r/retr8xbue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ljpxgdjml"/><path class="retr8xbue"/></g>`,
		"fallback": "iconoir:terminal-outline",
	});
}

export default Component;
