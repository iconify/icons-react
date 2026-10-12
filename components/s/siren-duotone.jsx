import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mtjc7kttb.css';
import '../../css/g/gcaqyxndj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mtjc7kttb"/><path class="gcaqyxndj"/></g>`,
		"fallback": "lucide-extended:siren-duotone",
	});
}

export default Component;
