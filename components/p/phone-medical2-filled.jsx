import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wqc57ccdb.css';
import '../../css/d/d0sslvxjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wqc57ccdb"/><path class="d0sslvxjq"/></g>`,
		"fallback": "reicon:phone-medical2-filled",
	});
}

export default Component;
