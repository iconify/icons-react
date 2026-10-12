import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vrcf_0-uk.css';
import '../../css/y/ywt-f5ezt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vrcf_0-uk"/><path class="ywt-f5ezt"/></g>`,
		"fallback": "lucide-extended:tent-tree-duotone",
	});
}

export default Component;
