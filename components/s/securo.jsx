import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss1_jtd_n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss1_jtd_n"/>`,
		"fallback": "selfhst:securo",
	});
}

export default Component;
