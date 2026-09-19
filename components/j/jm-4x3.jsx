import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m1xbfebow.css';
import '../../css/a/ahryracrv.css';
import '../../css/b/bzy6fnbvg.css';
import '../../css/g/gyuq1jbxc.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="m1xbfebow"/><path class="ahryracrv"/><path class="bzy6fnbvg"/><path class="gyuq1jbxc"/></g>`,
		"fallback": "flag:jm-4x3",
	});
}

export default Component;
