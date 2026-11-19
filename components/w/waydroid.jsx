import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-37hqbcf.css';
import '../../css/e/ehejjjvmh.css';
import '../../css/j/jse_opbpc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-37hqbcf"/><path class="ehejjjvmh"/><path class="jse_opbpc"/>`,
		"fallback": "selfhst:waydroid",
	});
}

export default Component;
