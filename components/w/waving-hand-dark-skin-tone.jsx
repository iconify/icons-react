import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcoxi2bal.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/v2khsxths.css';
import '../../css/d/dkzresbgo.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcoxi2bal"/><g class="jn8qy4bru"><path class="v2khsxths"/><path class="dkzresbgo"/></g>`,
		"fallback": "openmoji:waving-hand-dark-skin-tone",
	});
}

export default Component;
