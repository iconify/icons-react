import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lhnkpeblb.css';
import '../../css/h/hsl5cssye.css';
import '../../css/o/osmj5yboo.css';
import '../../css/j/ja24kvs1e.css';
import '../../css/l/lfb-6qb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lhnkpeblb"/><path class="hsl5cssye"/><path class="osmj5yboo"/><path class="ja24kvs1e"/><path class="lfb-6qb6d"/></g>`,
		"fallback": "streamline-cyber-color:lock-open-4",
	});
}

export default Component;
