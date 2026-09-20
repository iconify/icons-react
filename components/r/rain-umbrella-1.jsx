import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/emth_bcde.css';
import '../../css/j/j4dyh3b5j.css';
import '../../css/y/yhd2noblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="emth_bcde"/><path class="j4dyh3b5j"/><path class="yhd2noblb"/></g>`,
		"fallback": "streamline-ultimate-color:rain-umbrella-1",
	});
}

export default Component;
