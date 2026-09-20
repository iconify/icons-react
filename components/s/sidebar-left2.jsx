import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v2gztr96w.css';
import '../../css/q/qa8z8ybpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v2gztr96w"/><path class="qa8z8ybpb"/></g>`,
		"fallback": "reicon:sidebar-left2",
	});
}

export default Component;
