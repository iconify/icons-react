import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nzul_zbqb.css';
import '../../css/a/azxpmuo1p.css';
import '../../css/a/a9jb4ybyn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="nzul_zbqb"/><path class="azxpmuo1p"/><path class="a9jb4ybyn"/></g>`,
		"fallback": "icon-park:people-left",
	});
}

export default Component;
