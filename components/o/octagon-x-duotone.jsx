import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hoqmwc11w.css';
import '../../css/n/nb9d1ibpa.css';
import '../../css/f/fseys5djj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hoqmwc11w"/><path class="nb9d1ibpa"/><path class="fseys5djj"/></g>`,
		"fallback": "lucide-extended:octagon-x-duotone",
	});
}

export default Component;
