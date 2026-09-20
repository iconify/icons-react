import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew9mh_xxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew9mh_xxg"/>`,
		"fallback": "uil:jackhammer",
	});
}

export default Component;
