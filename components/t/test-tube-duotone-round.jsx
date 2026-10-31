import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ozmqjggeo.css';
import '../../css/e/edww9-bza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ozmqjggeo"/><path class="edww9-bza"/></g>`,
		"fallback": "coolicons:test-tube-duotone-round",
	});
}

export default Component;
