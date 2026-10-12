import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hhi-gmoxu.css';
import '../../css/r/rgggbcbui.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/r/rgm6dncut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hhi-gmoxu"/><path class="rgggbcbui"/><path class="s1a2eew1e"/><path clip-rule="evenodd" class="rgm6dncut"/></g>`,
		"fallback": "lucide-extended:square-user-round-duotone",
	});
}

export default Component;
