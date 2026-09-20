import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oy6xs-ufv.css';
import '../../css/z/z5xnn5lxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oy6xs-ufv"/><path clip-rule="evenodd" class="z5xnn5lxq"/></g>`,
		"fallback": "majesticons:phone-retro",
	});
}

export default Component;
