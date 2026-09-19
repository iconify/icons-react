import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fosf2ck3z.css';
import '../../css/x/x1kqalb8d.css';
import '../../css/i/ixdq6ntaf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fosf2ck3z"/><path class="x1kqalb8d"/><path clip-rule="evenodd" class="ixdq6ntaf"/></g>`,
		"fallback": "healthicons:patient-band-alt-outline",
	});
}

export default Component;
