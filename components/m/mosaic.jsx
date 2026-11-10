import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qjsjbv3zt.css';
import '../../css/z/znn3dqbfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qjsjbv3zt"/><path class="znn3dqbfs"/></g>`,
		"fallback": "andrsrxn:mosaic",
	});
}

export default Component;
