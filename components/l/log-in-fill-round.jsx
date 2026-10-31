import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5k00k32a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5k00k32a"/>`,
		"fallback": "coolicons:log-in-fill-round",
	});
}

export default Component;
