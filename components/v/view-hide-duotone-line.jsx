import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acbazhg2y.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x8yw542mv.css';
import '../../css/f/fr0vjkbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGq7pbYcni" class="acbazhg2y"/></defs><g class="ft5dv1b6b"><use href="#SVGq7pbYcni" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#SVGq7pbYcni" clip-rule="evenodd" class="d2kvgvbvc"/><path clip-rule="evenodd" class="x8yw542mv"/><path class="fr0vjkbsc"/></g>`,
		"fallback": "lets-icons:view-hide-duotone-line",
	});
}

export default Component;
