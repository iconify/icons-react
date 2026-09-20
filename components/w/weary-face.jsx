import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t47bc6bdn.css';
import '../../css/z/ztni599nj.css';
import '../../css/n/n2_771bjc.css';
import '../../css/w/wqyg2xbwc.css';
import '../../css/d/drphy1bum.css';
import '../../css/p/p93bg8bpw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t47bc6bdn"/><g class="ztni599nj"><circle class="n2_771bjc"/><path class="wqyg2xbwc"/><path class="drphy1bum"/><path class="p93bg8bpw"/></g>`,
		"fallback": "openmoji:weary-face",
	});
}

export default Component;
