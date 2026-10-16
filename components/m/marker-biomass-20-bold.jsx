import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hei8_htdz.css';
import '../../css/p/p3rpssb_c.css';
import '../../css/s/syuk1s6xu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hei8_htdz"/><path class="p3rpssb_c"/><path class="syuk1s6xu"/>`,
		"fallback": "energy-icons:marker-biomass-20-bold",
	});
}

export default Component;
