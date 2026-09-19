import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fda2rlb1x.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fda2rlb1x"/>`,
		"fallback": "whh:pixelaxe",
	});
}

export default Component;
