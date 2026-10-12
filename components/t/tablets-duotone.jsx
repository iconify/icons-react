import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dhbt0bbiv.css';
import '../../css/v/v5ygwybkd.css';
import '../../css/r/r_iishbvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dhbt0bbiv"/><path class="v5ygwybkd"/><path class="r_iishbvs"/></g>`,
		"fallback": "lucide-extended:tablets-duotone",
	});
}

export default Component;
