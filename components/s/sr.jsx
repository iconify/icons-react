import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qqd3ar4ot.css';
import '../../css/j/j9-twf9kk.css';
import '../../css/a/agl3okrsa.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qqd3ar4ot"/><path class="j9-twf9kk"/><path clip-rule="evenodd" class="agl3okrsa"/></g>`,
		"fallback": "flagpack:sr",
	});
}

export default Component;
