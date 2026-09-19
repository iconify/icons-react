import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj4h_4poq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj4h_4poq"/>`,
		"fallback": "cil:share-alt",
	});
}

export default Component;
