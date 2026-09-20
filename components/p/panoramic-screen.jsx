import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y24cs8b0w.css';
import '../../css/o/opgm-xbwt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y24cs8b0w"/><path class="opgm-xbwt"/></g>`,
		"fallback": "streamline-flex-color:panoramic-screen",
	});
}

export default Component;
