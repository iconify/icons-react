import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfefkwblm.css';
import '../../css/f/fk7rcw87b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yfefkwblm"/><path clip-rule="evenodd" class="fk7rcw87b"/></g>`,
		"fallback": "streamline-plump-color:play-list-1-flat",
	});
}

export default Component;
