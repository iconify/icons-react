import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/v/v_f4tuwyf.css';
import '../../css/n/ng0o3zupy.css';
import '../../css/q/q6p93hbjw.css';
import '../../css/v/vg0klab_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="v_f4tuwyf"/><path class="ng0o3zupy"/><path class="q6p93hbjw"/></g><path class="vg0klab_s"/></g>`,
		"fallback": "solar:star-angle-bold-duotone",
	});
}

export default Component;
