import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyxukz89o.css';
import '../../css/s/s3ncxfb_u.css';
import '../../css/g/gg_dz3bxt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="eyxukz89o"><path class="s3ncxfb_u"/><path class="gg_dz3bxt"/></g>`,
		"fallback": "flat-color-icons:undo",
	});
}

export default Component;
