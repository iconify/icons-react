import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/islpwrbax.css';
import '../../css/f/fg_9inbkk.css';
import '../../css/g/g1vushbzv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="islpwrbax"/><path class="fg_9inbkk"/><path class="g1vushbzv"/>`,
		"fallback": "fxemoji:mushroom",
	});
}

export default Component;
