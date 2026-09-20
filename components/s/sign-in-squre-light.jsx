import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_cjwpb9i.css';
import '../../css/s/sn8fl2bfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b_cjwpb9i"/><path class="sn8fl2bfg"/></g>`,
		"fallback": "lets-icons:sign-in-squre-light",
	});
}

export default Component;
