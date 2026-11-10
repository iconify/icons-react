import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux6p4ubfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ux6p4ubfk"/>`,
		"fallback": "sidekickicons:shield-x-mark-solid",
	});
}

export default Component;
