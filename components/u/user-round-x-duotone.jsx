import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/laeq__ozm.css';
import '../../css/s/sf7yaz6nn.css';
import '../../css/o/okalx_bvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="laeq__ozm"/><path class="sf7yaz6nn"/><path class="okalx_bvh"/></g>`,
		"fallback": "lucide-extended:user-round-x-duotone",
	});
}

export default Component;
