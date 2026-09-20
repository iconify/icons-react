import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/f/fl1sb-bxk.css';
import '../../css/f/f0fwq5baa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="fl1sb-bxk"/><path class="f0fwq5baa"/></g>`,
		"fallback": "streamline-color:screen-curve",
	});
}

export default Component;
