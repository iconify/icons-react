import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us81xcbgt.css';
import '../../css/w/wpm7l0iir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us81xcbgt"/><path class="wpm7l0iir"/>`,
		"fallback": "mingcute:repeat-one-line",
	});
}

export default Component;
