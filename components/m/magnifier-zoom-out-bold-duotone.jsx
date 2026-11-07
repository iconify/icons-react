import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcjk-wbhz.css';
import '../../css/i/i3vvs1wnr.css';
import '../../css/c/ccgk8ubpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcjk-wbhz"/><path class="i3vvs1wnr"/><path class="ccgk8ubpo"/>`,
		"fallback": "solar:magnifier-zoom-out-bold-duotone",
	});
}

export default Component;
