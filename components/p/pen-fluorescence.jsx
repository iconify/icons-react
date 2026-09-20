import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hxpyivboc.css';
import '../../css/l/l1ls72bcq.css';
import '../../css/e/et1igft8z.css';
import '../../css/g/gtwke1gzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hxpyivboc"/><path class="l1ls72bcq"/><path class="et1igft8z"/><path class="gtwke1gzy"/></g>`,
		"fallback": "tdesign:pen-fluorescence",
	});
}

export default Component;
