import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kgznelv8g.css';
import '../../css/y/yk1mp-b7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kgznelv8g"/><path class="yk1mp-b7w"/></g>`,
		"fallback": "lucide-extended:rectangle-goggles-duotone",
	});
}

export default Component;
