import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/xglklabzt.css';
import '../../css/d/dg-z_9bth.css';
import '../../css/v/vw_4rdbwn.css';
import '../../css/q/q2on0eeef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="xglklabzt"/><path class="dg-z_9bth"/><path class="vw_4rdbwn"/><path class="q2on0eeef"/></g>`,
		"fallback": "bitcoin-icons:no-dollars-outline",
	});
}

export default Component;
