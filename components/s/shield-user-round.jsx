import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfezq7azm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfezq7azm"/>`,
		"fallback": "coolicons:shield-user-round",
	});
}

export default Component;
