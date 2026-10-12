import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rlvea8b0i.css';
import '../../css/f/f59_fh1ap.css';
import '../../css/l/lewo1f2te.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rlvea8b0i"/><path class="f59_fh1ap"/><path class="lewo1f2te"/></g>`,
		"fallback": "lucide-extended:mouse-pointer-ban-duotone",
	});
}

export default Component;
