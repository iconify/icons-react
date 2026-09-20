import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/g/gp16otb8y.css';
import '../../css/o/oy4rssbpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="gp16otb8y"/><path class="oy4rssbpg"/></g>`,
		"fallback": "streamline-sharp-color:tag-free-circle",
	});
}

export default Component;
