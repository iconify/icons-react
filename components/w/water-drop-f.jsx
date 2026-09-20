import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq_5smh8d.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq_5smh8d"/>`,
		"fallback": "jam:water-drop-f",
	});
}

export default Component;
