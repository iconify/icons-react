import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s1252actf.css';
import '../../css/y/ystm-j8cr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s1252actf"/><path class="ystm-j8cr"/></g>`,
		"fallback": "streamline-ultimate-color:move-down-1",
	});
}

export default Component;
