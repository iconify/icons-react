import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzlj2ol0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzlj2ol0i"/>`,
		"fallback": "coolicons:option-fill-round",
	});
}

export default Component;
