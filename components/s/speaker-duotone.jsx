import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pihw0xj_y.css';
import '../../css/v/v28la4rjs.css';
import '../../css/b/b1yeqac8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pihw0xj_y"/><path class="v28la4rjs"/><path class="b1yeqac8a"/></g>`,
		"fallback": "lucide-extended:speaker-duotone",
	});
}

export default Component;
