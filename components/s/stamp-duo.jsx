import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i2wb6-bne.css';
import '../../css/l/l7x25kbkc.css';
import '../../css/e/eyr57ibcj.css';
import '../../css/v/vuvr24b3y.css';
import '../../css/y/y5xaw8b8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="i2wb6-bne"/><path class="l7x25kbkc wm-a"/><path class="eyr57ibcj wm-s"/><path class="vuvr24b3y wm-a"/><path class="y5xaw8b8n"/></g>`,
		"fallback": "withicons:stamp-duo",
	});
}

export default Component;
