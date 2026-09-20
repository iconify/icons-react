import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpd_00bvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tpd_00bvw"/>`,
		"fallback": "solar:square-arrow-left-down-outline",
	});
}

export default Component;
