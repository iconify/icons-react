import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjnt2fbgz.css';
import '../../css/w/w8jjrpbxx.css';
import '../../css/h/h4pogicwi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjnt2fbgz"/><path class="w8jjrpbxx"/><path class="h4pogicwi"/>`,
		"fallback": "energy-icons:receipt-refund-20",
	});
}

export default Component;
