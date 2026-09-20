import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/m/my185mb8y.css';
import '../../css/t/ta-_lpb0q.css';
import '../../css/x/x4ojzvb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="my185mb8y"/><path class="ta-_lpb0q"/><path class="x4ojzvb8x"/></g>`,
		"fallback": "streamline-cyber:pickup-truck",
	});
}

export default Component;
