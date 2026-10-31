import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzv02bb8d.css';
import '../../css/b/bt09-pcir.css';
import '../../css/j/jhnkpebfv.css';
import '../../css/u/ub4dlub9y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yzv02bb8d"/><path class="bt09-pcir"/><path class="jhnkpebfv"/><path class="ub4dlub9y"/></g>`,
		"fallback": "streamline-kameleon-color:start-pop",
	});
}

export default Component;
