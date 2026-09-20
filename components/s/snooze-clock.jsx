import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j-b44cxaf.css';
import '../../css/b/bn6rf-kvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="j-b44cxaf"/><path class="bn6rf-kvj"/></g>`,
		"fallback": "streamline-sharp:snooze-clock",
	});
}

export default Component;
