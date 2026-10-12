import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxrgvbcdf.css';
import '../../css/r/rt3fdztit.css';
import '../../css/n/n59n-mb2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oxrgvbcdf"/><path class="rt3fdztit"/><path class="n59n-mb2e"/></g>`,
		"fallback": "lucide-extended:layers-plus-duotone",
	});
}

export default Component;
