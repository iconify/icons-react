import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj5hfzb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj5hfzb4a"/>`,
		"fallback": "coolicons:tablet-fill-round",
	});
}

export default Component;
