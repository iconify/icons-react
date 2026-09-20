import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxrr_ccra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxrr_ccra"/>`,
		"fallback": "mdi:presence-exit",
	});
}

export default Component;
