import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcs7_0bhg.css';
import '../../css/x/xreezc2ol.css';
import '../../css/u/utbp3ny_p.css';
import '../../css/x/x3ecq6b_k.css';
import '../../css/u/uoea4uo8z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcs7_0bhg"/><path class="xreezc2ol"/><path class="utbp3ny_p"/><path class="x3ecq6b_k"/><path class="uoea4uo8z"/>`,
		"fallback": "energy-icons:minibus-20-bold",
	});
}

export default Component;
