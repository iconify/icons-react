import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laa_ont7b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="laa_ont7b"/>`,
		"fallback": "game-icons:sliced-mushroom",
	});
}

export default Component;
