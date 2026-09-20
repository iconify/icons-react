import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yaoslxb-z.css';
import '../../css/r/rukbslbee.css';
import '../../css/j/j2dz5zb2g.css';
import '../../css/g/glacu0bku.css';
import '../../css/i/iqcwf2baa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yaoslxb-z"/><path class="rukbslbee"/><path class="j2dz5zb2g"/><path class="glacu0bku"/><path class="iqcwf2baa"/></g>`,
		"fallback": "streamline-cyber-color:multi-platform-2",
	});
}

export default Component;
