import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p9-zrkb4g.css';
import '../../css/x/x-31wjbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p9-zrkb4g"/><path class="x-31wjbko"/></g>`,
		"fallback": "majesticons:rubel-circle-line",
	});
}

export default Component;
