import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sphu1debh.css';
import '../../css/p/p5fjdeb2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sphu1debh"/><path class="p5fjdeb2j"/></g>`,
		"fallback": "si:umbrella-duotone",
	});
}

export default Component;
