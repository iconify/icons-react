import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ukz87w37f.css';
import '../../css/c/c15q2jbtz.css';
import '../../css/h/hnmvecxnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ukz87w37f"/><path class="c15q2jbtz"/><path class="hnmvecxnc"/></g>`,
		"fallback": "lucide-extended:key-duotone",
	});
}

export default Component;
