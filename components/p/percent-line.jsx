import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/amxs67rqb.css';
import '../../css/p/pm27xrbad.css';
import '../../css/j/j_dnqlc5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="amxs67rqb"/><circle class="pm27xrbad"/><circle class="j_dnqlc5d"/></g>`,
		"fallback": "majesticons:percent-line",
	});
}

export default Component;
