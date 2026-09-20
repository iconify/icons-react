import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hbben0axk.css';
import '../../css/z/zai2u-bsd.css';
import '../../css/x/xiv_559sm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hbben0axk"/><path class="zai2u-bsd"/><path class="xiv_559sm"/></g>`,
		"fallback": "streamline-cyber-color:rugby",
	});
}

export default Component;
