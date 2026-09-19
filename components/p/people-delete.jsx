import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/n/nzul_zbqb.css';
import '../../css/y/yy1-npbji.css';
import '../../css/d/d_6oo4vix.css';
import '../../css/t/tsr0sjbtq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="nzul_zbqb"/><path class="yy1-npbji"/><path class="d_6oo4vix"/><path class="tsr0sjbtq"/></g>`,
		"fallback": "icon-park:people-delete",
	});
}

export default Component;
