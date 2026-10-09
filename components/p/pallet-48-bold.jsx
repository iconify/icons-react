import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be6_u9f6k.css';
import '../../css/b/b_4t_bc2a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be6_u9f6k"/><path class="b_4t_bc2a"/>`,
		"fallback": "energy-icons:pallet-48-bold",
	});
}

export default Component;
