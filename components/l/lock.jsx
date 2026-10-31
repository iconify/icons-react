import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ovfd3qb1t.css';
import '../../css/e/er06fkbtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="ovfd3qb1t"/><path class="er06fkbtk"/></g>`,
		"fallback": "struq:lock",
	});
}

export default Component;
