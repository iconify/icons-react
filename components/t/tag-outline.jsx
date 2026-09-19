import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/x-1sijr5f.css';
import '../../css/d/dt-gdj9go.css';
import '../../css/u/urjx-ibsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="x-1sijr5f"/><path class="dt-gdj9go"/><path class="urjx-ibsa"/></g>`,
		"fallback": "bitcoin-icons:tag-outline",
	});
}

export default Component;
