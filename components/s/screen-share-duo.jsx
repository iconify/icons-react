import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tu0-m0rqe.css';
import '../../css/j/jmku5acuo.css';
import '../../css/c/csac9jvtl.css';
import '../../css/v/vxuqhab0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tu0-m0rqe"/><path class="jmku5acuo wm-s"/><path class="csac9jvtl"/><path class="vxuqhab0r wm-a"/></g>`,
		"fallback": "withicons:screen-share-duo",
	});
}

export default Component;
