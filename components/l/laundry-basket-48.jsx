import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkt9q_b2i.css';
import '../../css/p/pczwsit1r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkt9q_b2i"/><path class="pczwsit1r"/>`,
		"fallback": "energy-icons:laundry-basket-48",
	});
}

export default Component;
