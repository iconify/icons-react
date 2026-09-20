import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bafd-0bfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bafd-0bfg"/>`,
		"fallback": "mdi:user-settings",
	});
}

export default Component;
