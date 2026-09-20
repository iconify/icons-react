import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j3uwuyday.css';
import '../../css/y/yvhrvk0ds.css';
import '../../css/h/h935y7bwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j3uwuyday"/><path class="yvhrvk0ds"/><path class="h935y7bwz"/></g>`,
		"fallback": "streamline-ultimate-color:pin-2",
	});
}

export default Component;
