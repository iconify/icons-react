import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwwfx_glv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwwfx_glv"/>`,
		"fallback": "game-icons:tank-tread",
	});
}

export default Component;
