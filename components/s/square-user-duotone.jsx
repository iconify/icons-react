import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/g/gr85z2v6b.css';
import '../../css/r/r-_kwybxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s1a2eew1e"/><path clip-rule="evenodd" class="gr85z2v6b"/><path class="r-_kwybxu"/></g>`,
		"fallback": "lucide-extended:square-user-duotone",
	});
}

export default Component;
