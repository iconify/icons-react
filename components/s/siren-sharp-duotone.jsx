import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/ikxifqblw.css';
import '../../css/z/zusgepdhq.css';
import '../../css/e/e5xtnl27s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ikxifqblw"/><path clip-rule="evenodd" class="zusgepdhq"/><path class="e5xtnl27s"/></g>`,
		"fallback": "keyline-icons:siren-sharp-duotone",
	});
}

export default Component;
