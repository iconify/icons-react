import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1z77kb0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1z77kb0f"/>`,
		"fallback": "fe:smile-alt",
	});
}

export default Component;
