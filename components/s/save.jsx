import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq8rzkbds.css';
import '../../css/m/mmxhl-bkw.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/h/hlray_uja.css';
import '../../css/t/tzwk1-biw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq8rzkbds"/><circle class="mmxhl-bkw"/><g class="ij2x_72vy"><path class="hlray_uja"/><circle class="tzwk1-biw"/></g>`,
		"fallback": "openmoji:save",
	});
}

export default Component;
