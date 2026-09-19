import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/x/xmrwny0vd.css';
import '../../css/b/bf9_qabtn.css';
import '../../css/i/ia_9upbwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="xmrwny0vd"/><circle class="bf9_qabtn"/><path class="ia_9upbwp"/></g>`,
		"fallback": "hugeicons:shapes-01",
	});
}

export default Component;
