import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nch7ptbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nch7ptbak"/>`,
		"fallback": "thesvg-color:under-armour",
	});
}

export default Component;
