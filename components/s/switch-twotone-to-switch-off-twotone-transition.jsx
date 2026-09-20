import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psp_wn.css';
import '../../css/y/ydovum.css';
import '../../css/k/kjds8p.css';
import '../../css/c/cx-from-17px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psp_wn ydovum"/><circle class="kjds8p ydovum"/>`,
		"fallback": "line-md:switch-twotone-to-switch-off-twotone-transition",
	});
}

export default Component;
