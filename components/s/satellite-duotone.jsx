import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tvi4lgpob.css';
import '../../css/b/b4jr9vbne.css';
import '../../css/d/daz97mqlm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tvi4lgpob"/><path class="b4jr9vbne"/><path class="daz97mqlm"/></g>`,
		"fallback": "lucide-extended:satellite-duotone",
	});
}

export default Component;
