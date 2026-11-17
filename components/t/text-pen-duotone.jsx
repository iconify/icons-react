import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z5qy-bctl.css';
import '../../css/z/z9w1x66uv.css';
import '../../css/v/v5cvinb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z5qy-bctl"/><path class="z9w1x66uv"/><path class="v5cvinb2z"/></g>`,
		"fallback": "lucide-extended:text-pen-duotone",
	});
}

export default Component;
