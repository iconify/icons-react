import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb4m6sblx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb4m6sblx"/>`,
		"fallback": "mdi:list-box",
	});
}

export default Component;
