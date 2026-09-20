import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv2_z3-bi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv2_z3-bi"/>`,
		"fallback": "tabler:square-rounded-number-0-filled",
	});
}

export default Component;
