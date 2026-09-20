import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ienelxbau.css';
import '../../css/m/m6rzn3b0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ienelxbau"/><path class="m6rzn3b0c"/></g>`,
		"fallback": "tabler:layout-sidebar-right-expand",
	});
}

export default Component;
