import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb7_855gm.css';
import '../../css/i/ipbkl_l6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb7_855gm"/><path class="ipbkl_l6p"/>`,
		"fallback": "si:phone-callback-duotone",
	});
}

export default Component;
