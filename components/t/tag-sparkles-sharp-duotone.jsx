import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/ml6y6ub5c.css';
import '../../css/q/q-x02trva.css';
import '../../css/h/hlvcfl71u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ml6y6ub5c"/><path class="q-x02trva"/><path class="hlvcfl71u"/></g>`,
		"fallback": "keyline-icons:tag-sparkles-sharp-duotone",
	});
}

export default Component;
