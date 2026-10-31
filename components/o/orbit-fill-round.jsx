import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmwcp1byk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmwcp1byk"/>`,
		"fallback": "coolicons:orbit-fill-round",
	});
}

export default Component;
