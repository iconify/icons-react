import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbf16yb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbf16yb_d"/>`,
		"fallback": "thesvg:utorrent",
	});
}

export default Component;
