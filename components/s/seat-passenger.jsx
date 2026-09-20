import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm4_6m-0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm4_6m-0o"/>`,
		"fallback": "mdi:seat-passenger",
	});
}

export default Component;
