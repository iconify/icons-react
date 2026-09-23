import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/k5rty6s-p.css';
import '../../css/k/kl46ljbgy.css';
import '../../css/z/zlaspxbje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="k5rty6s-p"/><path class="kl46ljbgy"/><path class="zlaspxbje"/></g>`,
		"fallback": "keyline-icons:list-sparkles-sharp-duotone",
	});
}

export default Component;
