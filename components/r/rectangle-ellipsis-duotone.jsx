import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cj2g5-b5u.css';
import '../../css/k/kgcffbbmj.css';
import '../../css/m/mq2u-nbgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cj2g5-b5u"/><path class="kgcffbbmj"/><path class="mq2u-nbgl"/></g>`,
		"fallback": "lucide-extended:rectangle-ellipsis-duotone",
	});
}

export default Component;
