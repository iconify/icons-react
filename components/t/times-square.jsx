import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovs_n1b_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovs_n1b_o"/>`,
		"fallback": "uil:times-square",
	});
}

export default Component;
