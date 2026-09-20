import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_sw8up6t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g_sw8up6t"/>`,
		"fallback": "pepicons-pencil:square",
	});
}

export default Component;
