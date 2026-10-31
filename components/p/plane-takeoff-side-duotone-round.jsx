import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b--0-wb7z.css';
import '../../css/m/ma5votvlf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b--0-wb7z"/><path class="ma5votvlf"/></g>`,
		"fallback": "coolicons:plane-takeoff-side-duotone-round",
	});
}

export default Component;
