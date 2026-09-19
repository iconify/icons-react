import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug90t0lcu.css';
import '../../css/v/v783iab8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug90t0lcu"/><circle class="v783iab8c"/>`,
		"fallback": "eos-icons:volume",
	});
}

export default Component;
