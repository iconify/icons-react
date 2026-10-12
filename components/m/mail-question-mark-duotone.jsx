import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tovaefsnx.css';
import '../../css/s/sigei6ulc.css';
import '../../css/d/ds2gjlbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tovaefsnx"/><path class="sigei6ulc"/><path class="ds2gjlbtn"/></g>`,
		"fallback": "lucide-extended:mail-question-mark-duotone",
	});
}

export default Component;
