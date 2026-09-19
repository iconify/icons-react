import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwm_4jb1w.css';
import '../../css/j/jmbrci4fi.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwm_4jb1w"/><path class="jmbrci4fi"/>`,
		"fallback": "foundation:page-search",
	});
}

export default Component;
