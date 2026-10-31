import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/asn0svbql.css';
import '../../css/l/ll-fpcbms.css';
import '../../css/j/jwwk0vzbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="asn0svbql wm-k"/><path class="ll-fpcbms wm-shine"/><path class="jwwk0vzbo wm-shine"/></g>`,
		"fallback": "withicons-lunar:passport",
	});
}

export default Component;
