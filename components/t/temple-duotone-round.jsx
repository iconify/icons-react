import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tsqm_4b-a.css';
import '../../css/a/a-spkmypt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tsqm_4b-a"/><path class="a-spkmypt"/></g>`,
		"fallback": "coolicons:temple-duotone-round",
	});
}

export default Component;
