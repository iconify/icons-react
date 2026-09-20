import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ellh8r-1x.css';
import '../../css/o/o39ngecar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ellh8r-1x"/><path class="o39ngecar"/></g>`,
		"fallback": "keyline-icons:trophy-two-tone",
	});
}

export default Component;
