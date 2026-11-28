import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/okoh6nbnl.css';
import '../../css/e/egk2kv01d.css';
import '../../css/o/ormhxpb2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="okoh6nbnl"/><path class="egk2kv01d"/><path class="ormhxpb2x"/></g>`,
		"fallback": "iconaut:symmetry-horizontal",
	});
}

export default Component;
