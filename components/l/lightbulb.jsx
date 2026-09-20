import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq3s8zbtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq3s8zbtt"/>`,
		"fallback": "proicons:lightbulb",
	});
}

export default Component;
