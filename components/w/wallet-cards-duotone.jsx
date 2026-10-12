import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rcofwzbcf.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/b/b9l-rx9lv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rcofwzbcf"/><path class="s1a2eew1e"/><path class="b9l-rx9lv"/></g>`,
		"fallback": "lucide-extended:wallet-cards-duotone",
	});
}

export default Component;
