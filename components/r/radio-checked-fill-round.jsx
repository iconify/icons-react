import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8n5t8baq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8n5t8baq"/>`,
		"fallback": "coolicons:radio-checked-fill-round",
	});
}

export default Component;
