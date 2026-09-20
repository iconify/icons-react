import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkf-k8b2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkf-k8b2u"/>`,
		"fallback": "mdi:shield-cross",
	});
}

export default Component;
