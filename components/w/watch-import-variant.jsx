import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms5m7db0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms5m7db0v"/>`,
		"fallback": "mdi:watch-import-variant",
	});
}

export default Component;
