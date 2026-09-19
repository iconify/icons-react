import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xkcbbrbzm.css';
import '../../css/m/md286fbip.css';
import '../../css/a/afxenvblv.css';
import '../../css/z/zhnu5sbcn.css';
import '../../css/p/pcp1pubtx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="xkcbbrbzm"/><g class="md286fbip"><path class="afxenvblv"/><path class="zhnu5sbcn"/><path class="pcp1pubtx"/></g></g>`,
		"fallback": "cryptocurrency-color:loom",
	});
}

export default Component;
