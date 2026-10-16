import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgjp5_b_u.css';
import '../../css/h/h7qs6-b0q.css';
import '../../css/n/nwor9yc1z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgjp5_b_u"/><path class="h7qs6-b0q"/><path class="nwor9yc1z"/>`,
		"fallback": "energy-icons:marker-biomass-20",
	});
}

export default Component;
