import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b7bsyrbru.css';
import '../../css/g/ggbws0byq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b7bsyrbru"/><path class="ggbws0byq"/></g>`,
		"fallback": "solar:magic-stick-line-duotone",
	});
}

export default Component;
