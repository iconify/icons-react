import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7e6pqa5g.css';
import '../../css/e/e7iwt8-6g.css';
import '../../css/a/ayz1edcaj.css';
import '../../css/v/v2leg-7xz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y7e6pqa5g"/><path class="e7iwt8-6g"/><path clip-rule="evenodd" class="ayz1edcaj"/><path class="v2leg-7xz"/></g>`,
		"fallback": "icon-park-outline:virtual-reality-glasses",
	});
}

export default Component;
