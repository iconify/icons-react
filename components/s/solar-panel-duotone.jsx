import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b586-pbxl.css';
import '../../css/k/kkpssnb2s.css';
import '../../css/f/fnw9pc43f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b586-pbxl"/><path class="kkpssnb2s"/><path class="fnw9pc43f"/></g>`,
		"fallback": "lucide-extended:solar-panel-duotone",
	});
}

export default Component;
