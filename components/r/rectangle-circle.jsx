import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s2xh7utdb.css';
import '../../css/u/ut3jwge_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s2xh7utdb"/><circle class="ut3jwge_g"/></g>`,
		"fallback": "lucide:rectangle-circle",
	});
}

export default Component;
