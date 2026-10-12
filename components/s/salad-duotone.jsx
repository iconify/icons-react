import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vd48b6b9j.css';
import '../../css/l/llzh89b2x.css';
import '../../css/w/wus91yb_f.css';
import '../../css/b/b05jt-2ie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vd48b6b9j"/><path class="llzh89b2x"/><path class="wus91yb_f"/><path class="b05jt-2ie"/></g>`,
		"fallback": "lucide-extended:salad-duotone",
	});
}

export default Component;
