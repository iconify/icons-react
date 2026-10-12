import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hepm0sakq.css';
import '../../css/x/x4x127bql.css';
import '../../css/l/llhl7bcnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hepm0sakq"/><path class="x4x127bql"/><path class="llhl7bcnb"/></g>`,
		"fallback": "lucide-extended:videotape-duotone",
	});
}

export default Component;
