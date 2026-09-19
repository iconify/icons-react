import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsg5j7ibl.css';
import '../../css/v/v-v__jv0r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsg5j7ibl"/><path class="v-v__jv0r"/>`,
		"fallback": "ion:play-skip-forward-circle-outline",
	});
}

export default Component;
