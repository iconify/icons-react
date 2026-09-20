import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmpk6d91t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tmpk6d91t"/>`,
		"fallback": "solar:waterdrops-outline",
	});
}

export default Component;
