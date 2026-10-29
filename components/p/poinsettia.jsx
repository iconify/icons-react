import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/faql2ac0o.css';
import '../../css/f/ffyidnv2a.css';
import '../../css/d/dpfo8ffsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="faql2ac0o wm-k"/><path class="ffyidnv2a wm-s"/><path class="dpfo8ffsa"/></g>`,
		"fallback": "withicons-bauhaus:poinsettia",
	});
}

export default Component;
