import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c05_9vbhx.css';
import '../../css/g/gi5g7lm5g.css';
import '../../css/h/hl7ikcc0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c05_9vbhx"/><path class="gi5g7lm5g"/><path class="hl7ikcc0l"/></g>`,
		"fallback": "lucide-extended:users-round-collaboration-duotone",
	});
}

export default Component;
