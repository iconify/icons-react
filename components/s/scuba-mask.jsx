import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hlg038boe.css';
import '../../css/d/d8isnkbnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hlg038boe"/><path class="d8isnkbnw"/></g>`,
		"fallback": "tabler:scuba-mask",
	});
}

export default Component;
