import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4-hwxpky.css';
import '../../css/w/wtf96pb3l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4-hwxpky"/><path class="wtf96pb3l"/>`,
		"fallback": "garden:microphone-off-stroke-20",
	});
}

export default Component;
