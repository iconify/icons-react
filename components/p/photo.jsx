import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/de3gm-bpb.css';
import '../../css/q/q5cqyabqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="de3gm-bpb"/><circle class="q5cqyabqx"/></g>`,
		"fallback": "proicons:photo",
	});
}

export default Component;
