import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ouieqpbly.css';
import '../../css/n/nykdmub9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ouieqpbly"/><path clip-rule="evenodd" class="nykdmub9g"/></g>`,
		"fallback": "streamline-sharp-color:user-identifier-card-flat",
	});
}

export default Component;
