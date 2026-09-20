import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/a/ar2pifewr.css';
import '../../css/l/l5y6mtboz.css';
import '../../css/r/rlumsgb7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="ar2pifewr"/><path class="l5y6mtboz"/></g><path class="rlumsgb7u"/></g>`,
		"fallback": "solar:smart-vacuum-cleaner-bold-duotone",
	});
}

export default Component;
