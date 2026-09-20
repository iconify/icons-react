import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/a/ar6svccon.css';
import '../../css/c/c6yv8di5i.css';
import '../../css/r/r5fi7zbva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="ar6svccon"/><path class="c6yv8di5i"/></g><path class="r5fi7zbva"/></g>`,
		"fallback": "solar:link-minimalistic-bold-duotone",
	});
}

export default Component;
