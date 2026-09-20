import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ty3hqsxbs.css';
import '../../css/g/go75i7e2x.css';
import '../../css/y/y2zl39b4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ty3hqsxbs"/><path class="go75i7e2x"/><path class="y2zl39b4h"/></g>`,
		"fallback": "solar:loader-bold-duotone",
	});
}

export default Component;
