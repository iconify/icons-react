import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abx036wst.css';
import '../../css/n/nv2jz3bhl.css';
import '../../css/l/l3pzy9htd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abx036wst"/><path class="nv2jz3bhl"/><path class="l3pzy9htd"/>`,
		"fallback": "ion:ios-car",
	});
}

export default Component;
