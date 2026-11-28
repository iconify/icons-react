import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ups5z8bkf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j29_93bki.css';
import '../../css/a/auyy-jbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary ups5z8bkf"/><g class="dt0cm9dhy primary"><path class="j29_93bki"/><path class="auyy-jbvx"/></g>`,
		"fallback": "iconaut:layers-2-horizontal-duo",
	});
}

export default Component;
