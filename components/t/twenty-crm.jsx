import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_hh80boa.css';
import '../../css/p/p4pgybewu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_hh80boa"/><path class="p4pgybewu"/>`,
		"fallback": "selfhst:twenty-crm",
	});
}

export default Component;
