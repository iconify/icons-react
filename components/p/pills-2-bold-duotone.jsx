import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/x/x-qojpb3f.css';
import '../../css/o/o1cmcabyz.css';
import '../../css/y/y5ctpnbbg.css';
import '../../css/e/egcm0gb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="x-qojpb3f"/><path class="o1cmcabyz"/></g><path class="y5ctpnbbg"/><path class="egcm0gb_o"/></g>`,
		"fallback": "solar:pills-2-bold-duotone",
	});
}

export default Component;
