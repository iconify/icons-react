import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcjk-wbhz.css';
import '../../css/i/i3vvs1wnr.css';
import '../../css/f/fqll1i-6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcjk-wbhz"/><path class="i3vvs1wnr"/><path clip-rule="evenodd" class="fqll1i-6f"/>`,
		"fallback": "solar:magnifier-bug-bold-duotone",
	});
}

export default Component;
