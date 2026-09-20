import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rlomlrauu.css';
import '../../css/y/yy9a156zt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rlomlrauu"/><path class="yy9a156zt"/></g>`,
		"fallback": "tabler:mood-check",
	});
}

export default Component;
