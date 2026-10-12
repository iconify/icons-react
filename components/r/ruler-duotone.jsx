import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dnimzpbzq.css';
import '../../css/o/o1-lycc9y.css';
import '../../css/v/v2tabnved.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dnimzpbzq"/><path class="o1-lycc9y"/><path class="v2tabnved"/></g>`,
		"fallback": "lucide-extended:ruler-duotone",
	});
}

export default Component;
