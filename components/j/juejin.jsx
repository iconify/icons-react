import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p79vmbtic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p79vmbtic"/>`,
		"fallback": "thesvg-color:juejin",
	});
}

export default Component;
