import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed67yly0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed67yly0q"/>`,
		"fallback": "ri:mixtral-line",
	});
}

export default Component;
