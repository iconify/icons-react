import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h50fbvbaq.css';
import '../../css/s/s865nktrb.css';
import '../../css/g/gg-w76gso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h50fbvbaq"/><path class="s865nktrb"/><path class="gg-w76gso"/></g>`,
		"fallback": "tabler:transform-point-bottom-left",
	});
}

export default Component;
