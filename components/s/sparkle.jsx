import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/grnl-6xsu.css';
import '../../css/z/z38rj8bjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="grnl-6xsu"/><path class="z38rj8bjk"/></g>`,
		"fallback": "reicon:sparkle",
	});
}

export default Component;
