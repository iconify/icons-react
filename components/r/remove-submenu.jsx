import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwqd-kc1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="nwqd-kc1v"/>`,
		"fallback": "wordpress:remove-submenu",
	});
}

export default Component;
