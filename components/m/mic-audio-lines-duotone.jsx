import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hn8jksbfc.css';
import '../../css/f/f81gfpzad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hn8jksbfc"/><path class="f81gfpzad"/></g>`,
		"fallback": "lucide-extended:mic-audio-lines-duotone",
	});
}

export default Component;
