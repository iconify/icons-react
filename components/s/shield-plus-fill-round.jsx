import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxj0mf-xe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxj0mf-xe"/>`,
		"fallback": "coolicons:shield-plus-fill-round",
	});
}

export default Component;
