import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whwpro6ey.css';
import '../../css/f/fyssiwbsm.css';
import '../../css/o/olzrecbio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="whwpro6ey"/><path class="fyssiwbsm"/><path class="olzrecbio"/></g>`,
		"fallback": "lucide-extended:key-square-duotone",
	});
}

export default Component;
