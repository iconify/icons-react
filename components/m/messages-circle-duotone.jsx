import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/apuirddye.css';
import '../../css/t/tv7s8ebji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="apuirddye"/><path class="tv7s8ebji"/></g>`,
		"fallback": "lucide-extended:messages-circle-duotone",
	});
}

export default Component;
