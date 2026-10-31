import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jovy96b0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jovy96b0t"/>`,
		"fallback": "coolicons:virus-fill-round",
	});
}

export default Component;
