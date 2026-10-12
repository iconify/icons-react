import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3kc-ox6s.css';
import '../../css/g/g1hcxlfvl.css';
import '../../css/s/sjgfxfb6j.css';
import '../../css/u/uo9nlgbgx.css';
import '../../css/u/uyhdqmb_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n3kc-ox6s"/><path class="g1hcxlfvl"/><path class="sjgfxfb6j"/><path class="uo9nlgbgx"/><path class="uyhdqmb_m"/></g>`,
		"fallback": "lucide-extended:pencil-ruler-duotone",
	});
}

export default Component;
