import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrqpor88k.css';
import '../../css/t/t-lei6bni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrqpor88k"/><path clip-rule="evenodd" class="t-lei6bni"/>`,
		"fallback": "solar:vinyl-bold",
	});
}

export default Component;
