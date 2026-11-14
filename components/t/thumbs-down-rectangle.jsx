import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gw3ve7bqp.css';
import '../../css/k/k54g8sq5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gw3ve7bqp"/><path class="k54g8sq5l"/></g>`,
		"fallback": "hugeicons:thumbs-down-rectangle",
	});
}

export default Component;
