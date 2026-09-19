import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de91r55gz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de91r55gz"/>`,
		"fallback": "fxemoji:reversethumbsdown",
	});
}

export default Component;
