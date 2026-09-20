import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvs494b9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvs494b9p"/>`,
		"fallback": "mdi:phone-incoming-outline",
	});
}

export default Component;
