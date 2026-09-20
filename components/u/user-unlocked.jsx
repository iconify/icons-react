import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm-7o-8hm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm-7o-8hm"/>`,
		"fallback": "mdi:user-unlocked",
	});
}

export default Component;
