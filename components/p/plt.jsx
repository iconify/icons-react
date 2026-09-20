import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oez0cbkpo.css';
import '../../css/n/n9j-kib2y.css';
import '../../css/p/p350f2bac.css';
import '../../css/y/yy39maccd.css';
import '../../css/x/x1c6bzbsm.css';
import '../../css/c/c-j74kbfb.css';
import '../../css/f/fcs4zkzno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oez0cbkpo"/><path class="n9j-kib2y"/><path class="p350f2bac"/><path class="yy39maccd"/><path class="x1c6bzbsm"/><path class="c-j74kbfb"/><path clip-rule="evenodd" class="fcs4zkzno"/>`,
		"fallback": "token:plt",
	});
}

export default Component;
