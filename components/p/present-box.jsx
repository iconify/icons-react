import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/en18tebkx.css';
import '../../css/d/d5hvaebmu.css';
import '../../css/j/jut0cwbej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="en18tebkx"/><path class="d5hvaebmu"/><path class="jut0cwbej"/></g>`,
		"fallback": "streamline-cyber-color:present-box",
	});
}

export default Component;
