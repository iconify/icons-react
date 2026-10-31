import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ri9ngmbky.css';
import '../../css/a/a_rc_bytf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ri9ngmbky"/><path class="a_rc_bytf"/></g>`,
		"fallback": "coolicons:users-group-duotone-round",
	});
}

export default Component;
