import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbh6_gbph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbh6_gbph"/>`,
		"fallback": "mono-icons:menu",
	});
}

export default Component;
