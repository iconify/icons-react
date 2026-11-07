import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwczj0bva.css';
import '../../css/i/ieaqgcb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwczj0bva"/><path class="ieaqgcb1c"/>`,
		"fallback": "solar:smart-speaker-minimalistic-bold-duotone",
	});
}

export default Component;
