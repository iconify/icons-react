import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecjw8ubxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecjw8ubxj"/>`,
		"fallback": "tabler:list-check-filled",
	});
}

export default Component;
