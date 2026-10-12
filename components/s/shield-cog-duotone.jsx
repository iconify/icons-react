import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6hp2xf_p.css';
import '../../css/i/ioa1vxxno.css';
import '../../css/r/rmdxzccvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w6hp2xf_p"/><path class="ioa1vxxno"/><path class="rmdxzccvt"/></g>`,
		"fallback": "lucide-extended:shield-cog-duotone",
	});
}

export default Component;
