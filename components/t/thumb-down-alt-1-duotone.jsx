import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/foe-smumj.css';
import '../../css/r/rt_27bc2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="foe-smumj"/><path class="rt_27bc2t"/></g>`,
		"fallback": "si:thumb-down-alt-1-duotone",
	});
}

export default Component;
