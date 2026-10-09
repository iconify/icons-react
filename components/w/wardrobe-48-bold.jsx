import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir6r4qmdm.css';
import '../../css/l/lfvfo_aeu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir6r4qmdm"/><path class="lfvfo_aeu"/>`,
		"fallback": "energy-icons:wardrobe-48-bold",
	});
}

export default Component;
