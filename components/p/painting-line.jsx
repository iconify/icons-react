import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkr9t4bzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkr9t4bzp"/>`,
		"fallback": "ri:painting-line",
	});
}

export default Component;
