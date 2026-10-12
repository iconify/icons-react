import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v0-xpbb2b.css';
import '../../css/d/d6xrfdbqy.css';
import '../../css/k/kh3h7ac0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v0-xpbb2b"/><path class="d6xrfdbqy"/><path class="kh3h7ac0h"/></g>`,
		"fallback": "lucide-extended:parking-meter-duotone",
	});
}

export default Component;
