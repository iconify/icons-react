import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mmefwdmgd.css';
import '../../css/q/qbj_lybpr.css';
import '../../css/w/wkqxadc8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mmefwdmgd"/><path class="qbj_lybpr"/><path class="wkqxadc8l"/></g>`,
		"fallback": "streamline-freehand:shopping-bag-target",
	});
}

export default Component;
