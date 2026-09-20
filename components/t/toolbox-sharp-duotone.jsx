import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/aiytbqb_a.css';
import '../../css/o/oq-xadcze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="aiytbqb_a"/><path class="oq-xadcze"/></g>`,
		"fallback": "keyline-icons:toolbox-sharp-duotone",
	});
}

export default Component;
