import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a-dgvv46o.css';
import '../../css/e/e53pcbn_d.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a-dgvv46o"/><path class="e53pcbn_d"/></g>`,
		"fallback": "pullo:shield-x-duotone",
	});
}

export default Component;
