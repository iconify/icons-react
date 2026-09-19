import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe3bh2r2o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe3bh2r2o"/>`,
		"fallback": "game-icons:labrador-head",
	});
}

export default Component;
