import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwfrq7b_a.css';
import '../../css/v/v27rigbgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwfrq7b_a"/><path clip-rule="evenodd" class="v27rigbgl"/>`,
		"fallback": "token:omni",
	});
}

export default Component;
