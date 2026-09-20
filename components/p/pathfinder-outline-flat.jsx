import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hlrh7zd-c.css';
import '../../css/a/adycsccqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hlrh7zd-c"/><path class="adycsccqa"/></g>`,
		"fallback": "streamline-sharp-color:pathfinder-outline-flat",
	});
}

export default Component;
