import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ibql2392g.css';
import '../../css/r/rf5dn__pe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ibql2392g"/><path class="rf5dn__pe"/></g>`,
		"fallback": "coolicons:scale-duotone-round",
	});
}

export default Component;
