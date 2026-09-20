import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn3mo9bss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dn3mo9bss"/>`,
		"fallback": "thesvg:pi-network",
	});
}

export default Component;
