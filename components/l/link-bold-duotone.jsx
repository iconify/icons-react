import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln1f_4blw.css';
import '../../css/u/u8s4_onzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln1f_4blw"/><path class="u8s4_onzx"/>`,
		"fallback": "solar:link-bold-duotone",
	});
}

export default Component;
