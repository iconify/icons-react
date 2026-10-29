import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bve4te0yg.css';
import '../../css/w/wkw6z49nw.css';
import '../../css/e/ereqplbdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bve4te0yg"/><path class="wkw6z49nw"/><path class="ereqplbdn"/></g>`,
		"fallback": "withicons-bauhaus:lucky-coin",
	});
}

export default Component;
