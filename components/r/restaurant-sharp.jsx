import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtu_bi9-n.css';
import '../../css/p/puxz7qb3z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtu_bi9-n"/><path class="puxz7qb3z"/>`,
		"fallback": "ion:restaurant-sharp",
	});
}

export default Component;
