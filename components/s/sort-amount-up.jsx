import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmp5x0bgg.css';
import '../../css/f/frpv_vbdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmp5x0bgg"/><path class="frpv_vbdy"/>`,
		"fallback": "prime:sort-amount-up",
	});
}

export default Component;
