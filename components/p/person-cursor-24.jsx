import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz47_7v9x.css';
import '../../css/n/n9qbr_l5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz47_7v9x"/><path class="n9qbr_l5i"/>`,
		"fallback": "octicon:person-cursor-24",
	});
}

export default Component;
