import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4_nkabvo.css';
import '../../css/x/xevlx76mo.css';
import '../../css/t/tn9jk3b0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4_nkabvo wm-k"/><path class="wm-a xevlx76mo"/><path class="tn9jk3b0c wm-k"/>`,
		"fallback": "withicons-bauhaus:link",
	});
}

export default Component;
