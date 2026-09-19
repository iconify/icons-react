import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h86mgvbul.css';
import '../../css/q/q1twtkyxc.css';
import '../../css/y/y7fclmbmv.css';
import '../../css/x/xv2bueb3a.css';
import '../../css/k/k48qwhbyv.css';
import '../../css/w/wi7sf9bmc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h86mgvbul"/><path class="q1twtkyxc"/><path class="y7fclmbmv"/><path class="xv2bueb3a"/><path class="k48qwhbyv"/><path class="wi7sf9bmc"/>`,
		"fallback": "fxemoji:minidisc",
	});
}

export default Component;
