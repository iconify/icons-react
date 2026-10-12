import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bmv2fpbdp.css';
import '../../css/k/kf9sfo81n.css';
import '../../css/o/orbttxm4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bmv2fpbdp"/><path class="kf9sfo81n"/><path class="orbttxm4n"/></g>`,
		"fallback": "lucide-extended:notebook-duotone",
	});
}

export default Component;
