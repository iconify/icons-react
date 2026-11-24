import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rse2fckhf.css';
import '../../css/u/urs66ruka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rse2fckhf"/><path class="urs66ruka"/></g>`,
		"fallback": "lucide-extended:star-duotone",
	});
}

export default Component;
