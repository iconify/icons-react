import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hxkoqb07q.css';
import '../../css/g/go4d8z99l.css';
import '../../css/w/weboadcul.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hxkoqb07q"/><path class="go4d8z99l"/><path class="weboadcul"/></g>`,
		"fallback": "devicon-plain:jasmine-wordmark",
	});
}

export default Component;
