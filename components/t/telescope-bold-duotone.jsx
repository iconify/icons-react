import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/n/nj3877h8f.css';
import '../../css/b/bej489v3t.css';
import '../../css/g/gawidq0hz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="nj3877h8f"/><path class="bej489v3t"/></g><path class="gawidq0hz"/></g>`,
		"fallback": "solar:telescope-bold-duotone",
	});
}

export default Component;
