import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/ky7fzbcuf.css';
import '../../css/j/jvtjbnueh.css';
import '../../css/g/gz0j8xbyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ky7fzbcuf"/><path class="jvtjbnueh"/><path class="gz0j8xbyn"/></g>`,
		"fallback": "hugeicons:play-list",
	});
}

export default Component;
