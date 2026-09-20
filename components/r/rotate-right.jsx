import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/a/a7e7esbzb.css';
import '../../css/r/rfyx4ybpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="a7e7esbzb"/><path class="rfyx4ybpk"/></g>`,
		"fallback": "streamline-cyber:rotate-right",
	});
}

export default Component;
