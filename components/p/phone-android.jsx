import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc5t4xbsr.css';
import '../../css/w/w2xstcbue.css';
import '../../css/r/rq_3jfb5z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc5t4xbsr"/><path class="w2xstcbue"/><path class="rq_3jfb5z"/>`,
		"fallback": "flat-color-icons:phone-android",
	});
}

export default Component;
