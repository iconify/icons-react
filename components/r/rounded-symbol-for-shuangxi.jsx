import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpj65fbae.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/i/i3vxk5brn.css';
import '../../css/r/r40lbgbhy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="hpj65fbae"/><g class="kdz4acc8r"><circle class="i3vxk5brn"/><path class="r40lbgbhy"/></g>`,
		"fallback": "openmoji:rounded-symbol-for-shuangxi",
	});
}

export default Component;
