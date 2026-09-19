import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/znc_k639x.css';
import '../../css/k/k4ftlkben.css';
import '../../css/k/ko5gow_dd.css';
import '../../css/f/f7kgbwb1g.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="znc_k639x"/><path class="k4ftlkben"/><path class="ko5gow_dd"/><path class="f7kgbwb1g"/></g>`,
		"fallback": "flag:mu-4x3",
	});
}

export default Component;
