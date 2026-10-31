import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aimb1-8ps.css';
import '../../css/l/lxsosla-d.css';
import '../../css/s/ssaqghbvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="aimb1-8ps"/><circle class="lxsosla-d"/><path class="ssaqghbvr"/></g>`,
		"fallback": "struq:integration",
	});
}

export default Component;
