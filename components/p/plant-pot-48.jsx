import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sae2abcxn.css';
import '../../css/o/ofilwt45e.css';
import '../../css/c/ctcrptfet.css';
import '../../css/c/c1reo_bid.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sae2abcxn"/><path class="ofilwt45e"/><path class="ctcrptfet"/><path class="c1reo_bid"/>`,
		"fallback": "energy-icons:plant-pot-48",
	});
}

export default Component;
