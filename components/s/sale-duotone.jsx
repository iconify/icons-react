import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rethogg-f.css';
import '../../css/z/z8qvbab9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rethogg-f"/><path class="z8qvbab9f"/></g>`,
		"fallback": "reicon:sale-duotone",
	});
}

export default Component;
