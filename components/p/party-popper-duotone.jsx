import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifwqegp9d.css';
import '../../css/u/ulb2g3bnb.css';
import '../../css/i/ijavnscdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ifwqegp9d"/><path class="ulb2g3bnb"/><path class="ijavnscdy"/></g>`,
		"fallback": "lucide-extended:party-popper-duotone",
	});
}

export default Component;
