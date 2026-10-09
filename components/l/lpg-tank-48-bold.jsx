import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc7b7e4ab.css';
import '../../css/u/un07r_bjv.css';
import '../../css/p/pdn0d5lux.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc7b7e4ab"/><path class="un07r_bjv"/><path class="pdn0d5lux"/>`,
		"fallback": "energy-icons:lpg-tank-48-bold",
	});
}

export default Component;
