import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nqk0tjbws.css';
import '../../css/y/yi1ygjbjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nqk0tjbws"/><path class="yi1ygjbjf"/></g>`,
		"fallback": "nrk:spoken-subtitles",
	});
}

export default Component;
