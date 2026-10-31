import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/byro1hbim.css';
import '../../css/t/tu5_sx12l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="byro1hbim"/><path class="tu5_sx12l"/></g>`,
		"fallback": "coolicons:piggy-bank-duotone-round",
	});
}

export default Component;
