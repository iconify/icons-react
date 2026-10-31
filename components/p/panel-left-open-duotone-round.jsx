import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t8xi8pkds.css';
import '../../css/a/a-1b07ceq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t8xi8pkds"/><path class="a-1b07ceq"/></g>`,
		"fallback": "coolicons:panel-left-open-duotone-round",
	});
}

export default Component;
