import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lla1cob_j.css';
import '../../css/q/qdb5lgfip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lla1cob_j"/><path class="qdb5lgfip"/></g>`,
		"fallback": "coolicons:martini-duotone-round",
	});
}

export default Component;
