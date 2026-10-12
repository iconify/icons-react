import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncjasqbdy.css';
import '../../css/d/dthlj7xkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ncjasqbdy"/><path class="dthlj7xkb"/></g>`,
		"fallback": "lucide-extended:line-dot-left-horizontal-duotone",
	});
}

export default Component;
