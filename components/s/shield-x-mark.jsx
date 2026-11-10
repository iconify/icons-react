import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw_njbb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw_njbb5p"/>`,
		"fallback": "sidekickicons:shield-x-mark",
	});
}

export default Component;
