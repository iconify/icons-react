import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mr1utis7l.css';
import '../../css/e/ey2w9mdkp.css';
import '../../css/h/hg8zt48lg.css';
import '../../css/r/r7vaarvpx.css';
import '../../css/h/h5a7nmbfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mr1utis7l"/><path class="ey2w9mdkp"/><path class="hg8zt48lg"/><path class="r7vaarvpx"/><path class="h5a7nmbfd"/></g>`,
		"fallback": "andrsrxn:thermometer-droplets",
	});
}

export default Component;
