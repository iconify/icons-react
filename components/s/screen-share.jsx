import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/csac9jvtl.css';
import '../../css/v/vxuqhab0r.css';
import '../../css/j/jmku5acuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="csac9jvtl"/><path class="vxuqhab0r wm-a"/><path class="jmku5acuo wm-s"/></g>`,
		"fallback": "withicons:screen-share",
	});
}

export default Component;
