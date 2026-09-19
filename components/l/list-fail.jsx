import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cd0y8fbhg.css';
import '../../css/h/hpifqdbin.css';
import '../../css/t/t9unskp3q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="cd0y8fbhg"/><circle class="hpifqdbin"/><circle class="t9unskp3q"/></g>`,
		"fallback": "icon-park-solid:list-fail",
	});
}

export default Component;
