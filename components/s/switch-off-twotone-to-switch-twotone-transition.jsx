import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psp_wn.css';
import '../../css/y/ydovum.css';
import '../../css/d/ds-pxa.css';
import '../../css/c/cx-from-7px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psp_wn ydovum"/><circle class="ds-pxa ydovum"/>`,
		"fallback": "line-md:switch-off-twotone-to-switch-twotone-transition",
	});
}

export default Component;
