import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdnocya5g.css';
import '../../css/s/sfzfjg58s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hdnocya5g"/><path class="sfzfjg58s"/>`,
		"fallback": "solar:square-bottom-down-bold",
	});
}

export default Component;
