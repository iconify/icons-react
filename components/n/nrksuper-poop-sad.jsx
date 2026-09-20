import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t_e92-c_t.css';
import '../../css/m/my-9xzb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t_e92-c_t"/><path class="my-9xzb9f"/></g>`,
		"fallback": "nrk:nrksuper-poop-sad",
	});
}

export default Component;
