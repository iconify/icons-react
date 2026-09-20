import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu70e7cqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu70e7cqe"/>`,
		"fallback": "pixel:pen",
	});
}

export default Component;
