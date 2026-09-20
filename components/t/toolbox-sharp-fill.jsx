import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/d7ayt8pbw.css';
import '../../css/v/vo4o49e0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="d7ayt8pbw"/><path class="vo4o49e0x"/></g>`,
		"fallback": "keyline-icons:toolbox-sharp-fill",
	});
}

export default Component;
