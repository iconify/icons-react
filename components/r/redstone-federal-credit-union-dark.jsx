import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0rob0b3t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0rob0b3t"/>`,
		"fallback": "selfhst:redstone-federal-credit-union-dark",
	});
}

export default Component;
