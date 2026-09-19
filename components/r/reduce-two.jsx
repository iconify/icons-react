import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nv1deiyek.css';
import '../../css/t/tioax3bil.css';
import '../../css/q/qjc0i83ur.css';
import '../../css/c/cjvudbbln.css';
import '../../css/t/thbuxufef.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="nv1deiyek"/><path class="tioax3bil"/><path class="qjc0i83ur"/><path class="cjvudbbln"/><path class="thbuxufef"/></g>`,
		"fallback": "icon-park:reduce-two",
	});
}

export default Component;
