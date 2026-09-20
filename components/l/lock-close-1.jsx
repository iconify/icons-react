import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/p/p7yrvfbbx.css';
import '../../css/c/cswve6qth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="p7yrvfbbx"/><path class="cswve6qth"/></g>`,
		"fallback": "streamline-cyber:lock-close-1",
	});
}

export default Component;
