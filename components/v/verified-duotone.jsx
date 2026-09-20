import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rethogg-f.css';
import '../../css/k/k2gh6-vqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rethogg-f"/><path class="k2gh6-vqw"/></g>`,
		"fallback": "reicon:verified-duotone",
	});
}

export default Component;
