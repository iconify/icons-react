import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yufabuf5s.css';
import '../../css/v/vroe11rdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yufabuf5s"/><path class="vroe11rdp"/></g>`,
		"fallback": "tdesign:map-navigation",
	});
}

export default Component;
