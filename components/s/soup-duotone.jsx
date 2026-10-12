import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uwx7j9nww.css';
import '../../css/l/llzh89b2x.css';
import '../../css/f/fk8bs2bho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uwx7j9nww"/><path class="llzh89b2x"/><path class="fk8bs2bho"/></g>`,
		"fallback": "lucide-extended:soup-duotone",
	});
}

export default Component;
