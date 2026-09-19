import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwuy1sbez.css';
import '../../css/f/ff9jhsbaq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwuy1sbez"/><rect class="ff9jhsbaq"/>`,
		"fallback": "ion:lock-open-outline",
	});
}

export default Component;
