import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/az90bnb8y.css';
import '../../css/l/l0xswydlb.css';
import '../../css/k/klpzb7dyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="az90bnb8y wm-deco"/><path class="l0xswydlb wm-k"/><path class="klpzb7dyr wm-a"/></g>`,
		"fallback": "withicons:ungroup-blueprint",
	});
}

export default Component;
