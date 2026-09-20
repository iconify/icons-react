import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/q/ql6o5sd4r.css';
import '../../css/z/zso0fjbls.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="ql6o5sd4r"/><path class="zso0fjbls"/></g>`,
		"fallback": "streamline-kameleon-color:pointer",
	});
}

export default Component;
