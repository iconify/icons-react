import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/o/okcr14bzx.css';
import '../../css/q/q13we7d3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="okcr14bzx"/><path class="q13we7d3u"/></g>`,
		"fallback": "streamline-cyber:pet-not-allow",
	});
}

export default Component;
