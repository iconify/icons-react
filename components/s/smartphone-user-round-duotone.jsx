import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rp-frbc_i.css';
import '../../css/b/bk0dwpbms.css';
import '../../css/u/ue-rx-bbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rp-frbc_i"/><path class="bk0dwpbms"/><path class="ue-rx-bbo"/></g>`,
		"fallback": "lucide-extended:smartphone-user-round-duotone",
	});
}

export default Component;
