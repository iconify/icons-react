import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7s4jsrmf.css';
import '../../css/w/w6i3edcxc.css';
import '../../css/m/m-1p_gxft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a7s4jsrmf"/><path class="w6i3edcxc"/><path class="m-1p_gxft"/></g>`,
		"fallback": "streamline-ultimate-color:vk-logo",
	});
}

export default Component;
