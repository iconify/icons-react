import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y113zabih.css';
import '../../css/n/ndrw9nivs.css';
import '../../css/m/mi48ctyhi.css';
import '../../css/w/wl1pkfb3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="y113zabih"/><path class="ndrw9nivs"/><path class="mi48ctyhi"/><path class="wl1pkfb3d"/></g>`,
		"fallback": "streamline-freehand-color:pathfinder-merge",
	});
}

export default Component;
