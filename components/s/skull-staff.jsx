import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo2ghhbip.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo2ghhbip"/>`,
		"fallback": "game-icons:skull-staff",
	});
}

export default Component;
