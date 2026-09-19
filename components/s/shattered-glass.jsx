import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uty0_vcee.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uty0_vcee"/>`,
		"fallback": "game-icons:shattered-glass",
	});
}

export default Component;
