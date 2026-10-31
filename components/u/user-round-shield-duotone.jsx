import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uuhy7uokb.css';
import '../../css/g/g5ptt82qa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uuhy7uokb"/><path class="g5ptt82qa"/></g>`,
		"fallback": "lucide-extended:user-round-shield-duotone",
	});
}

export default Component;
