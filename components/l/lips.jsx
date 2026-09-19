import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgblcmbsv.css';
import '../../css/p/p_8a0397c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgblcmbsv"/><path class="p_8a0397c"/>`,
		"fallback": "fxemoji:lips",
	});
}

export default Component;
