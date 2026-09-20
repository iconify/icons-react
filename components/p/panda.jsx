import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v3z08obsy.css';
import '../../css/e/ewiisubuy.css';
import '../../css/a/a80bfbbiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v3z08obsy"/><path class="ewiisubuy"/><path class="a80bfbbiy"/></g>`,
		"fallback": "lucide:panda",
	});
}

export default Component;
