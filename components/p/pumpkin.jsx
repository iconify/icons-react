import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/be-lwvbkt.css';
import '../../css/h/hngpq62ga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="be-lwvbkt"/><path class="hngpq62ga"/></g>`,
		"fallback": "tdesign:pumpkin",
	});
}

export default Component;
