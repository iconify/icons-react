import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stt006brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stt006brf"/>`,
		"fallback": "ri:list-check-3",
	});
}

export default Component;
