import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s50kqrtcf.css';
import '../../css/i/iwrg-gb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s50kqrtcf"/><path class="iwrg-gb6e"/>`,
		"fallback": "mingcute:more-2-line",
	});
}

export default Component;
