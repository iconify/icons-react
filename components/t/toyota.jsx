import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huv7wf-bp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huv7wf-bp"/>`,
		"fallback": "simple-icons:toyota",
	});
}

export default Component;
