import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf2faab1e.css';
import '../../css/u/u-06obvoh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf2faab1e"/><path class="u-06obvoh"/>`,
		"fallback": "mingcute:radiobox-line",
	});
}

export default Component;
