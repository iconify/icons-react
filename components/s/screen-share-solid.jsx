import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jds6n7b3j.css';
import '../../css/c/ca41k3b-d.css';
import '../../css/g/ghdivotkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jds6n7b3j"/><path class="ca41k3b-d wm-a"/><path class="ghdivotkq wm-s"/></g>`,
		"fallback": "withicons:screen-share-solid",
	});
}

export default Component;
