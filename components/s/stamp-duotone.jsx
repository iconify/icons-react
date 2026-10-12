import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5vg7rbbw.css';
import '../../css/e/e1ce3wbbz.css';
import '../../css/n/ntr3o-yjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e5vg7rbbw"/><path class="e1ce3wbbz"/><path class="ntr3o-yjd"/></g>`,
		"fallback": "lucide-extended:stamp-duotone",
	});
}

export default Component;
