import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrbk_lktj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrbk_lktj"/>`,
		"fallback": "guidance:skate-park",
	});
}

export default Component;
