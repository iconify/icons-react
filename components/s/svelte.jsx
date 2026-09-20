import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_xhkgbdq.css';
import '../../css/j/j--gjob4x.css';

const viewBox = {"width":256,"height":308};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_xhkgbdq"/><path class="j--gjob4x"/>`,
		"fallback": "thesvg-color:svelte",
	});
}

export default Component;
