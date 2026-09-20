import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p8oqe4bzp.css';
import '../../css/d/d6ayr8b-k.css';
import '../../css/y/yea7jvb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p8oqe4bzp"/><path class="d6ayr8b-k"/><path class="yea7jvb0a"/></g>`,
		"fallback": "streamline-cyber-color:navigation-up-arrow",
	});
}

export default Component;
