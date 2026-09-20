import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l6v91xbnd.css';
import '../../css/o/okamqbb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l6v91xbnd"/><path class="okamqbb4h"/></g>`,
		"fallback": "tabler:rating-12-plus",
	});
}

export default Component;
