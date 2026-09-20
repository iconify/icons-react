import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/x/x99csvbvw.css';
import '../../css/i/i0y2_-bex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="x99csvbvw"/><path class="i0y2_-bex"/></g>`,
		"fallback": "streamline-cyber:spray-paint-3",
	});
}

export default Component;
