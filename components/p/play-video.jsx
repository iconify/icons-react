import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm6olf9fp.css';
import '../../css/h/hr6xjbb6q.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm6olf9fp"/><path class="hr6xjbb6q"/>`,
		"fallback": "foundation:play-video",
	});
}

export default Component;
