import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q975aab4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q975aab4r"/>`,
		"fallback": "ri:t-shirt-line",
	});
}

export default Component;
