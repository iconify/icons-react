import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/buhs003aw.css';
import '../../css/n/nscebibah.css';
import '../../css/k/kgfl-19oz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="buhs003aw wm-k"/><path class="nscebibah wm-a"/><path class="kgfl-19oz wm-s"/></g>`,
		"fallback": "withicons:sunrise-gloss",
	});
}

export default Component;
