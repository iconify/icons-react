import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7sr6ubzr.css';
import '../../css/b/bxwa93b2u.css';
import '../../css/e/ec1xl5bkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7sr6ubzr"/><path class="bxwa93b2u"/><path class="ec1xl5bkr"/>`,
		"fallback": "gcp:trace",
	});
}

export default Component;
