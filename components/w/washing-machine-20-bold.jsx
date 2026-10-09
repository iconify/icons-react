import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmo-gj4um.css';
import '../../css/t/t0j6e-buy.css';
import '../../css/d/dw-imwo_c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmo-gj4um"/><path class="t0j6e-buy"/><path class="dw-imwo_c"/>`,
		"fallback": "energy-icons:washing-machine-20-bold",
	});
}

export default Component;
