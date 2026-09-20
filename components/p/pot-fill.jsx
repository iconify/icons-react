import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk1yj6bvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sk1yj6bvz"/>`,
		"fallback": "mingcute:pot-fill",
	});
}

export default Component;
