import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf6-upbrn.css';
import '../../css/q/qs8co3srk.css';
import '../../css/q/qs4x5kbiy.css';
import '../../css/i/i2xzaiewc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf6-upbrn"/><path class="qs8co3srk"/><path class="qs4x5kbiy"/><rect class="i2xzaiewc"/>`,
		"fallback": "lets-icons:wallet-duotone",
	});
}

export default Component;
