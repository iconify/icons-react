import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofhs6k5it.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofhs6k5it"/>`,
		"fallback": "coolicons:robot-fill-round",
	});
}

export default Component;
