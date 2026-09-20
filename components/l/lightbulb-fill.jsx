import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eohmfjb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eohmfjb1l"/>`,
		"fallback": "ri:lightbulb-fill",
	});
}

export default Component;
