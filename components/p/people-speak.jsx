import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nzul_zbqb.css';
import '../../css/s/spjlgoc2c.css';
import '../../css/n/n1n3-fbiu.css';
import '../../css/a/a9jb4ybyn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="nzul_zbqb"/><path class="spjlgoc2c"/><path class="n1n3-fbiu"/><path class="a9jb4ybyn"/></g>`,
		"fallback": "icon-park:people-speak",
	});
}

export default Component;
