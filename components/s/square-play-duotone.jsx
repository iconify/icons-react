import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dbqsfmbxh.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/e/eheeidcha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dbqsfmbxh"/><path class="s1a2eew1e"/><path class="eheeidcha"/></g>`,
		"fallback": "lucide-extended:square-play-duotone",
	});
}

export default Component;
