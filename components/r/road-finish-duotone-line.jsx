import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1e9kabeu.css';
import '../../css/v/vw4vnfb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l1e9kabeu"/><path class="vw4vnfb5p"/></g>`,
		"fallback": "lets-icons:road-finish-duotone-line",
	});
}

export default Component;
